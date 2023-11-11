import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
// import axios from 'axios';
import { search } from '../api/contact';

export default function Contacts() {
  const { keyword } = useParams();

  // for the security reason, separated network logic
  const queryFn = () => search(keyword);

  const { isLoading, error, data } = useQuery({
    queryKey: ['contacts', keyword],
    queryFn,
  });

  if (isLoading) return 'Loading....';

  if (error) return 'An error has occured ' + error.message;

  return (
    <>
      <div>{keyword ? `${keyword}` : 'Default contact Value'}</div>
      {isLoading && <p>Loading....</p>}
      {error && <p>Something is wrong</p>}
      {data && (
        <ul>
          {data.map((contact) => (
            <ContactCard key={data.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
