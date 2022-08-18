import type { NextPage } from 'next';
import { Navbar } from '../../src/reactformquery/components/molecules';
import { SignInInputs } from '../../src/reactformquery/components/organisms';
import Form from '../../src/reactformquery/components/atoms/Form';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useSignIn } from '../../src/reactformquery/api/signIn';
import { useUserStore } from '../../src/reactformquery/stores/UserContext';
import { useCallback } from 'react';

const ReactQueryExample: NextPage = () => {
  const signIn = useSignIn();

  const queryClient = useQueryClient();
  const { setId } = useUserStore((store) => ({
    setId: store.setId,
  }));

  const handleSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      signIn.mutate(values, {
        onSuccess: (data) => {
          setId(data.id);
          queryClient.invalidateQueries(['user-data']);
        },
      });
    },
    [signIn, queryClient, setId]
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4">
        <h1 className="text-3xl underline">UseQuery Example</h1>

        <Form onSubmit={handleSubmit}>
          <SignInInputs />
        </Form>
      </div>
    </>
  );
};

const queryClient = new QueryClient();

const PageWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryExample />
    </QueryClientProvider>
  );
};

export default PageWrapper;
