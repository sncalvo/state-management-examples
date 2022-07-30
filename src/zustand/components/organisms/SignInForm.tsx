import { SignInContextProvider, useSignInContext } from '../../contexts/SignInContext';
import { useUserContext } from '../../contexts/UserContext';
import { Card, Button } from '../atoms';
import { TextInput } from '../molecules';

const SignInFields = () => {
  const [_, setUser] = useUserContext();
  const values = useSignInContext();
  const { email } = values;

  const onSubmit = () => setUser(email);

  return (
    <Card innerAlignment="vertical">
      <TextInput name="email" label="Email" />
      <TextInput name="password" label="Password" />
      <Button onClick={onSubmit}>Sign In</Button>
    </Card>
  );
};

export const SignInForm = () => (
  <SignInContextProvider>
    <SignInFields />
  </SignInContextProvider>
);
