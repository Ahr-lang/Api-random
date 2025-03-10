'use client'
import { useState } from 'react';

export interface Item {
  id: number;
  title: string;
  content: string;
}

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (title: string, content: string) => {
    setItems(prev => [...prev, {
      id: Date.now(),
      title,
      content
    }]);
  };

  return { items, addItem };
};