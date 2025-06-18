import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

export function useAxios<T>(config: AxiosRequestConfig) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError | string>();
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios<T>(config);
      setData(data as T);
    } catch (e: unknown) {
      setError((e as AxiosError).message);
    } finally {
      setLoading(false);
    }
  }, [config]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
}
