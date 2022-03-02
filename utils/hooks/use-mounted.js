import { useEffect, useState } from 'react';

const useMounted = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted;
};

export default useMounted;
