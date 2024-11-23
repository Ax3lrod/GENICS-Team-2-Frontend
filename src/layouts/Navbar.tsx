'use client';

import { Button } from '@/components/nextui-extend-variants/Button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import { menuItems } from '@/contents/menuItems';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';

import Image from 'next/image';
import { useState } from 'react';
import withAuth from '@/components/hoc/withAuth';
import useAuthStore from '@/stores/useAuthStore';
import { useRouter } from 'next/navigation';

export default withAuth(NavbarLayout, 'public');
function NavbarLayout() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuthed, logout } = useAuthStore();
  const { user } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='py-4 bg-white bg-opacity-90'
    >
      <NavbarContent className='flex justify-between'>
        <NavbarBrand className='h-full'>
          <Image
            height={78}
            width={136}
            src='/logo-shareits.png'
            alt='logo'
            className='h-full w-fit object-contain'
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden'
        />
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex gap-4 md:gap-10 lg:gap-20'
        justify='center'
      >
        {menuItems.map((menu, index) => (
          <NavbarItem key={`${menu.label}-${index}`}>
            <Link color='primary' href={menu.href}>
              {menu.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {isAuthed ? (
        <NavbarContent justify='end' className='hidden md:flex gap-4'>
          <NavbarItem>
            <Dropdown placement='bottom-start'>
              <DropdownTrigger>
                <User
                  as='button'
                  avatarProps={{
                    isBordered: false,
                    src: '/images/user/user-profile.png',
                  }}
                  className='transition-transform'
                  name={'Hi, ' + (user?.user.username || 'User')}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='User Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-bold'>Signed in as</p>
                  <p className='font-bold'>{user?.user.username || 'User'} </p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem
                  key='logout'
                  color='danger'
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify='end' className='hidden md:flex gap-4'>
          <NavbarItem>
            <Button
              as={Link}
              color='primary'
              href='/auth/login'
              variant='solid'
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='primary' href='/auth' variant='bordered'>
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      {isAuthed ? (
        <NavbarMenu className='pt-20 bg-white bg-opacity-90'>
          {menuItems.map((menu, index) => (
            <NavbarMenuItem key={`mobile-${menu.label}-${index}`}>
              <Link
                className='w-full py-4'
                color='primary'
                href={menu.href}
                size='lg'
              >
                {menu.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Dropdown placement='bottom-start'>
              <DropdownTrigger>
                <User
                  as='button'
                  avatarProps={{
                    isBordered: false,
                    src: '/images/user/user-profile.png',
                  }}
                  className='transition-transform'
                  name={'Hi, ' + (user?.user.username || 'User')}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='User Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-bold'>Signed in as</p>
                  <p className='font-bold'>{user?.user.username || 'User'} </p>
                </DropdownItem>
                <DropdownItem key='settings'>My Settings</DropdownItem>
                <DropdownItem
                  key='logout'
                  color='danger'
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
        </NavbarMenu>
      ) : (
        <NavbarMenu className='pt-20 bg-white bg-opacity-90'>
          {menuItems.map((menu, index) => (
            <NavbarMenuItem key={`mobile-${menu.label}-${index}`}>
              <Link
                className='w-full py-4'
                color='primary'
                href={menu.href}
                size='lg'
              >
                {menu.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              as={Link}
              color='primary'
              href='/auth/login'
              variant='solid'
              className='w-full'
            >
              Login
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              as={Link}
              color='primary'
              href='/auth'
              variant='bordered'
              className='w-full'
            >
              Sign Up
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      )}
    </Navbar>
  );
}
