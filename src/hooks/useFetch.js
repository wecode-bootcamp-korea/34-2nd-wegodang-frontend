import { useCallback, useState, useEffect } from 'react';

export default function useFetch({
  httpClient,
  url,
  params = {},
  skip = false,
}) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = useCallback(async () => {
    try {
      const { data } = await httpClient.getData(url, params);
      setPayload(data);
    } catch (e) {
      console.error('error!!', e);
      setError('error!!');
    } finally {
      setLoading(false);
    }
  }, [httpClient, url]);

  useEffect(() => {
    if (skip) return;
    getData();
  }, [getData, skip]);

  return { payload, loading, error, getData };
}
