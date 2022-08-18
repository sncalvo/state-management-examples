import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useGetUser, useSignOut } from '../../api/signIn';
import { useUserStore } from '../../stores/UserContext';
import { Button } from '../atoms';

export const Navbar = () => {
  const { id, setId } = useUserStore();

  const signOutMutation = useSignOut();
  const { data, isLoading } = useGetUser(id);

  const queryClient = useQueryClient();

  const logOut = useCallback(() => {
    signOutMutation.mutate(undefined, {
      onSuccess: () => {
        setId(undefined);
        queryClient.invalidateQueries(['user-data']);
      },
    });
  }, [queryClient, setId, signOutMutation]);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div className="justify-self-end">
        {!isLoading && <h3 className="text-lg font-bold">{data?.email}</h3>}
        <Button onClick={logOut}>Log out</Button>
      </div>
    </div>
  );
};
