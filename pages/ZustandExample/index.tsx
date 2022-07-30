import type { NextPage } from 'next';
import { Navbar } from '../../src/zustand/components/molecules';
import { SignInForm } from '../../src/zustand/components/organisms';

const ZustandExample: NextPage = () => (
  <>
    <Navbar />
    <div className="flex flex-col p-4">
      <h1 className="text-3xl underline">Context Example</h1>

      <SignInForm />
    </div>
  </>
);

export default ZustandExample;
