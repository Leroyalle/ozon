import { useGetSessionQuery } from '@/entities';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCheckAuth = (type: 'auth' | 'no-auth') => {
  const router = useNavigate();
  const { data } = useGetSessionQuery();
  useEffect(() => {
    if (data?.session && type === 'no-auth') {
      console.log('ROUTER On');
      router('/');
    }

    if (!data?.session && type === 'auth') {
      console.log('ROUTER Off');
      router('/auth');
    }
  }, [data]);
};
