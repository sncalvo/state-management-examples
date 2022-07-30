import { useSignInStore } from '../../contexts/SignInContext';
import { useUserStore } from '../../contexts/UserContext';
import { Card, Button } from '../atoms';
import { TextInput } from '../molecules';

export const SignInForm = () => {
  const setUser = useUserStore(({ setUser }) => setUser);
  const email = useSignInStore(({ email }) => email);

  const onSubmit = () => setUser(email);

  return (
    <Card innerAlignment="vertical">
      <TextInput name="email" label="Email" />
      <TextInput name="password" label="Password" />
      <Button onClick={onSubmit}>Sign In</Button>
    </Card>
  );
};
