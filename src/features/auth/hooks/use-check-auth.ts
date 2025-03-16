import { useGetSessionQuery } from '@/entities';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCheckAuth = () => {
  const router = useNavigate();
  const { data } = useGetSessionQuery();
  useEffect(() => {
    if (data?.session) {
      console.log('ROUTER On');
      router('/');
    }
  }, [data]);
};
