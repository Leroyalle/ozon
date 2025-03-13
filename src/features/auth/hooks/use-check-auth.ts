import { useEffect } from 'react';
import { useGetSessionQuery } from '../api';
import { useNavigate } from 'react-router-dom';

export const useCheckAuth = () => {
  const router = useNavigate();
  const session = useGetSessionQuery();
  useEffect(() => {
    if (session.data?.session) {
      router('/');
    }
  });
};
