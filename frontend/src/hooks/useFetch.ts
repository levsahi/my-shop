import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Config } from '../interface/Config';

const useFetch = (config:Config) => {
  
  const {url} = config
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const {data:dataFromAxios} = await axios(config);

        setData(dataFromAxios);
        
      } catch (error) {
        setIsError(true);
      }finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;