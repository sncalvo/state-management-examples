import { NextPage } from 'next';
import { UserProvider } from '../../src/context/contexts/UserContext';
import { SignInForm } from '../../src/context/components/organisms';
import { Navbar } from '../../src/context/components/molecules';

const ContextExample: NextPage = () => (
  <UserProvider>
    <Navbar />
    <div className="flex flex-col p-4">
      <h1 className="text-3xl underline">Context Example</h1>

      <SignInForm />
    </div>
  </UserProvider>
);

export default ContextExample;
