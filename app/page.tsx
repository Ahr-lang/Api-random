// app/page.tsx
'use client';

import React, { useState } from 'react';
import { useApi } from './hooks/useApi';
import { Card } from './components/card';
import { Button } from './components/button';
import { Square } from './components/square';
import { User } from './types/User';

export default function Page() {
  const { data, loading, error, fetchData } = useApi<any>('https://randomuser.me/api');
  const newUser = data?.results?.[0] ?? null;

  const [savedUsers, setSavedUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const addUserToSquare = () => {
    if (newUser) {
      setSavedUsers((prev) => [...prev, newUser]);
    }
  };

  return (
    <main style={{ padding: '1rem', display: 'flex', gap: '20px' }}>
      <div>
        <h1>Random User Generator</h1>
        <Button onClick={() => { fetchData(); addUserToSquare(); }}>
          {loading ? 'Loading...' : 'Fetch Random User'}
        </Button>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {/* Show selected user details */}
        <Card user={selectedUser || newUser} />
      </div>

      {/* Show list of saved users */}
      <Square users={savedUsers} onSelectUser={setSelectedUser} />
    </main>
  );
}
