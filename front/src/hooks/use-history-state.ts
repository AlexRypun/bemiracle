import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type Response = {
  locationKey?: string;
};

const useHistoryState = (): Response => {
  const history = useHistory();
  const [locationKey, setLocationKey] = useState(history.location.key);
  useEffect(() => {
    history.listen(({ key }) => setLocationKey(key));
  }, [history]);
  return { locationKey };
};

export default useHistoryState;
