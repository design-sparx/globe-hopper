import { useCallback, useEffect, useState } from 'react';

export type TResponse<T> = {
  data: T[];
  error: any;
  loading: boolean;
};

export const useFetch = <T>(url: string): TResponse<T> => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
