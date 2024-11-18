'use client';

import api from '@/lib/api';
import {
  LecturerDetail,
  LecturerListResponse,
} from '@/types/lecturer/lecturer';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useLecturersQuery = ({
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
    queryKey: ['lecturer'],
    queryFn: async () => {
      let res;
      if (search || sort) {
        res = await api.get<LecturerListResponse>('/lecturers/search', {
          params: { query: search, sort: sort ? sort : null },
        });
      } else {
        res = await api.get<LecturerListResponse>('/lecturers');
      }
      return res.data.responseObject;
    },
    retry: false,
  });

  // pagination
  const [filteredData, setFilteredData] = useState<LecturerDetail[]>([]);

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
