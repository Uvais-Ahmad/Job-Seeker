import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { RAPID_API_KEY } from "@env";

interface FetchDataResponse<T = any> {
  data: T[];
  isLoading: boolean;
  error: AxiosError | null;
  refetch: () => void;
}
type methodType = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = (method : methodType, endpoint: string, query: Record<string, any> = {}): FetchDataResponse => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const options: AxiosRequestConfig = {
    method: method,
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': RAPID_API_KEY,
      'x-rapidapi-host': "jsearch.p.rapidapi.com",
    },
    params: query,
  };

  const fetchData = async () => {
    console.log("Fetching data...");
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data); 
      console.log("Response :==================");
    } catch (error) {
      setError(error as AxiosError);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
