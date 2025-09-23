import { useState, useEffect, useCallback } from "react";
import { getContentById } from "@/services/getContentById";

export function useContentById<T>(endpoint: string, id: number | string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (abort?: AbortSignal) => {
    try {
      const result = await getContentById<T>(endpoint, id, abort);
      setData(result);
    } catch (err: any) {
      if (err?.name !== "AbortError") 
        setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [endpoint, id]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);
    return () => controller.abort();
  }, [fetchData]);

  const refetch = useCallback(() => fetchData(), [fetchData]);

  return { data, loading, error, refetch };
}
