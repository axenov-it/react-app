import { useState } from "react";

type ResultInterface = [query: any, queryStatus: string, cansel: () => void];

export const useFetch = (
  isFetchedStatus: boolean = false,
  timeSuccessStatus: number = 2000
): ResultInterface => {
  const controller = new AbortController();

  const [queryStatus, setStatus] = useState("");

  const fetchedStatus = (status: string) =>
    isFetchedStatus && setStatus(status);

  const query = async (url: string, params?: any) => {
    fetchedStatus("started");

    await new Promise((r) => setTimeout(r, 2000));

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        ...params,
      });

      const result = await response.json();

      fetchedStatus("success");
      setTimeout(() => fetchedStatus(""), timeSuccessStatus);

      return { data: result };
    } catch (e) {
      fetchedStatus("fail");
      return Promise.resolve({ aborted: true });
    }
  };

  return [
    query,
    queryStatus,
    () => {
      controller.abort();
    },
  ];
};
