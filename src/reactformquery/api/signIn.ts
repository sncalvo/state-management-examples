import { useMutation, useQuery } from '@tanstack/react-query';

let myServerState = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password',
  },
  {
    id: 2,
    name: 'Hello Doe',
    email: 'hello@example.com',
    password: 'password',
  },
];

export const useSignIn = () =>
  useMutation(async (data: { email: string; password: string }) => {
    const user = myServerState.find((u) => u.email === data.email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== data.password) {
      throw new Error('Invalid password');
    }
    return user;
  });

export const useSignOut = () => useMutation(async (data) => {});

export const useGetUser = (id?: number | string) =>
  useQuery(['user-data', id], async () => {
    if (!id) {
      return null;
    }

    const user = myServerState.find((u) => u.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  });
