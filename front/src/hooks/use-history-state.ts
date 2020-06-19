import { useState } from 'react';
import { useHistory } from 'react-router-dom';

type Response = {
  locationKey?: string;
};

const useHistoryState = (): Response => {
  const history = useHistory();
  const [locationKey, setLocationKey] = useState(history.location.key);
  history.listen(({ key }, a) => {
    setLocationKey(key);
  });
  return { locationKey };
};

export default useHistoryState;
