'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import Loading from '@/components/Loading';
import Forbidden from '@/components/Forbidden';
import { DANGER_TOAST, showToast } from '@/components/Toast';
import { getToken, removeToken } from '@/lib/cookies';
import useAuthStore from '@/stores/useAuthStore';
import { User } from '@/types/entities/user';

export interface WithAuthProps {
  user: User;
}

const LOGIN_ROUTE = '/auth/login';

export enum RouteRole {
  public,
  private,
}

export default function withAuth<T extends WithAuthProps>(
  Component: React.FC<T>,
  routeRole: keyof typeof RouteRole = 'private',
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();

    //#region  //*=========== STORE ===========
    const isAuthed = useAuthStore.useIsAuthed();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      const token = getToken();

      if (!token) {
        // Jika tidak ada token, anggap user belum login
        if (isAuthed) {
          logout();
          removeToken();
        }
        stopLoading();
        return;
      }

      // Jika token ada, tetapi user belum di-store
      if (!isAuthed) {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          login(JSON.parse(storedUser));
        }
      }
      stopLoading();
    }, [isAuthed, login, logout, stopLoading]);

    React.useEffect(() => {
      checkAuth();

      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      // Redirect logic
      if (!isLoading) {
        if (isAuthed && routeRole === 'public') {
        } else if (!isAuthed && routeRole === 'private') {
          showToast('Please login first', DANGER_TOAST);
          router.push(LOGIN_ROUTE);
        }
      }
    }, [isAuthed, isLoading, router /*routeRole*/]);

    // Tampilkan loading screen jika sedang dalam proses cek login
    if (isLoading) return <Loading />;

    // Jika user belum login pada halaman private, tampilkan Forbidden
    if (!isAuthed && routeRole === 'private') {
      return <Forbidden />;
    }

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
