import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface FetchDataResponse<T = any> {
  data: T[];
  isLoading: boolean;
  error: AxiosError | null;
  refetch: () => void;
}

const useFetch = (endpoint: string, query: Record<string, any> = {}): FetchDataResponse => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: query,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data); 
    } catch (error) {
      setError(error as AxiosError);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, query]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
