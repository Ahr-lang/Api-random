'use client';
import { useApi } from '../hooks/useApi';
import { Button } from './button';

export const ApiConsumer = () => {
  const { data, loading, error, fetchData } = useApi<any>(
    'https://randomuser.me/api'
  );

  const user = data?.results?.[0];

  return (
    <div>
      <Button onClick={fetchData}>
        {loading ? 'Loading...' : 'Fetch Random User'}
      </Button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {user && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <p>Email: {user.email}</p>
          <img
            src={user.picture.thumbnail}
            alt="Random user thumbnail"
            style={{ borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};
