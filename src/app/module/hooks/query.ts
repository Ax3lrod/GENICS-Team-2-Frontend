'use client';

import api from '@/lib/api';
import { ModuleDetail, ModuleListResponse } from '@/types/module/module';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useModulesQuery = ({
  search,
  sort,
}: {
  search?: string;
  sort?: string;
}) => {
  const [maxData, setMaxData] = useState(6);
  const {
    isPending = true,
    isRefetching,
    isError,
    data,
    error,
    refetch,
  } = useQuery({
    queryKey: ['module-list'],
    queryFn: async () => {
      let res;
      if (search || sort) {
        res = await api.get<ModuleListResponse>('/modules/search', {
          params: { query: search, sort: sort ? sort : null },
        });
      } else {
        res = await api.get<ModuleListResponse>('/modules');
      }
      return res.data.responseObject;
    },
    retry: false,
  });

  // pagination
  const [filteredData, setFilteredData] = useState<ModuleDetail[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredData([...data].splice(0, maxData));
    }
  }, [data, maxData]);

  const onLoadMore = () => {
    if (data && maxData < data?.length) {
      setMaxData(maxData + 6);
    }
  };

  return {
    isPending,
    isRefetching,
    isError,
    data,
    filteredData,
    error,
    refetch,
    onLoadMore,
  };
};
