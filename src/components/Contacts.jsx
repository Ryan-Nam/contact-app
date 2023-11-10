import React from 'react';
import { useParams } from 'react-router-dom';

export default function Contacts() {
  const { keyword } = useParams();
  return <div>{keyword ? `${keyword}` : 'Default contact Value'}</div>;
}
