// app/components/card.tsx
'use client';
import React, { useState } from 'react';
import { Button } from './button';
import { User } from '../types/User';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaBirthdayCake, FaLock } from 'react-icons/fa';

interface CardProps {
  user: User | null;
}

export const Card = ({ user }: CardProps) => {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);

  if (!user) return null;

  const infoMap = {
    Name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    Email: user.email,
    Location: `${user.location.city}, ${user.location.country}`,
    Phone: user.phone,
    Birthday: new Date(user.dob.date).toLocaleDateString(),
    Password: user.login.password, // Just for demo, don't show passwords in real apps!
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #ddd', marginTop: '1rem' }}>
      <img
        src={user.picture.large}
        alt={infoMap.Name}
        style={{ borderRadius: '50%', width: '80px', height: '80px' }}
      />
      <h3>{infoMap.Name}</h3>

      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <Button onClick={() => setSelectedInfo(infoMap.Name)}><FaUser /></Button>
        <Button onClick={() => setSelectedInfo(infoMap.Email)}><FaEnvelope /></Button>
        <Button onClick={() => setSelectedInfo(infoMap.Location)}><FaMapMarkerAlt /></Button>
        <Button onClick={() => setSelectedInfo(infoMap.Phone)}><FaPhone /></Button>
        <Button onClick={() => setSelectedInfo(infoMap.Birthday)}><FaBirthdayCake /></Button>
        <Button onClick={() => setSelectedInfo(infoMap.Password)}><FaLock /></Button>
      </div>

      {selectedInfo && (
        <p style={{ marginTop: '8px', fontWeight: 'bold' }}>{selectedInfo}</p>
      )}
    </div>
  );
};
