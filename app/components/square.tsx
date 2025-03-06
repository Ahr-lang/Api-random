// app/components/square.tsx
'use client';
import React from 'react';
import { User } from '../types/User';

interface SquareProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export const Square = ({ users, onSelectUser }: SquareProps) => (
  <div style={{ width: '400px', height: '400px', border: '2px solid #333', padding: '10px', overflowY: 'auto' }}>
    <h3>Saved Users</h3>
    <ul>
      {users.map((user, index) => (
        <li key={index} style={{ marginBottom: '8px', cursor: 'pointer', color: 'blue' }} onClick={() => onSelectUser(user)}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  </div>
);
