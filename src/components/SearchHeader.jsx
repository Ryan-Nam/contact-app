import React, { useEffect, useState } from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function SearchHeader() {
    const {keyword} = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/contacts/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header>
      <Link to='/'>
        <BiSolidContact />
        <h1>Contact</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
