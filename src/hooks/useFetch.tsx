import { useEffect, useState } from 'react';

export function useFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options || {});
        const data = await res.json();

        if (res.ok) {
          setData(data);
        } else {
          throw new Error(`Ошибка ${res.statusText} ${res.status}`);
        }
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
}
