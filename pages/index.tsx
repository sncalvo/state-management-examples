import type { NextPage } from 'next';
import { useState } from 'react';
import { Button } from '../src/context/components/atoms';

const Home: NextPage = () => {
  const [text, setText] = useState('');

  const setRandomNumber = () => {
    setText(`${Math.random()}`);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-3xl underline">Home</h1>
      <Button onClick={setRandomNumber}>Set Random Text</Button>
      <h2>{text}</h2>
    </div>
  );
};

export default Home;
