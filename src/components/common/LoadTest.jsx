import React, { useState, useEffect } from 'react';

import { auth} from '../../api/auth';

const LoadTestComponent = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false
  });
  const fetchData = async () => {
    return await auth();
  };
  useEffect(() => {
    fetchData()
    .then((data) => {
      console.log('I have fetched the data')
      setState({ isLoading: false, data });
    })
    .catch(e => {
      console.log('e', e);
      setState({ isLoading: false });
    });
  }, []);

  const {
    isLoading, data
  } = state;
  return isLoading ? <h1>Is Loading</h1> : <h1>{data ? "Was data" : "No data"}</h1>
};

export default LoadTestComponent;
