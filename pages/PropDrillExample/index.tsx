import type { NextPage } from 'next';
import { useState } from 'react';
import { Navbar } from '../../src/propDrill/components/molecules';

import { SignInForm } from '../../src/propDrill/components/organisms';

const PropDrillExample: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    // Check email length greater than 0
    if (email.length === 0) {
      setError('Email is required');
      return;
    }

    // Check password length greater than 0
    if (password.length === 0) {
      setError('Password is required');
      return;
    }

    // Check email format
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError('Email is invalid');
      return;
    }

    setLoggedIn(email);
  };

  return (
    <div>
      <Navbar loggedInUser={loggedIn} logOut={() => setLoggedIn(null)} />
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-3xl underline">Prop Drilling Example</h1>

        <h2>{email}</h2>

        <SignInForm
          onEmailChange={(event) => setEmail(event.target.value)}
          onPasswordChange={(event) => setPassword(event.target.value)}
          onSubmit={onSubmit}
          email={email}
          password={password}
          error={error}
        />
      </div>
    </div>
  );
};

export default PropDrillExample;
