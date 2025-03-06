import { useApi } from '../hooks/useApi';
import { Button } from './button';
import { User } from '../types/User';

export const ApiConsumer = () => {
  const { data, loading, error, fetchData } = useApi<{ results: User[] }>(
    'https://randomuser.me/api'
  );

  return (
    <div>
      <Button onClick={fetchData}>
        {loading ? 'Loading...' : 'Fetch Random User'}
      </Button>
      
      {error && <p>Error: {error}</p>}
      
      {data?.results && (
        <div>
          <h2>{data.results[0].name.title} {data.results[0].name.first} {data.results[0].name.last}</h2>
          <p>Email: {data.results[0].email}</p>
          <img src={data.results[0].picture.large} alt="User" />
        </div>
      )}
    </div>
  );
};
