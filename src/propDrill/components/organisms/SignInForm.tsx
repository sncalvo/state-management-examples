import { Card, Button } from '../atoms';
import { TextInput } from '../molecules';

interface Props {
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  email: string;
  password: string;
  error?: string;
}

export const SignInForm = ({
  onEmailChange,
  onPasswordChange,
  onSubmit,
  email,
  password,
  error,
}: Props) => {
  return (
    <Card innerAlignment="vertical">
      <TextInput name="email" label="Email" value={email} onChange={onEmailChange} error={error} />
      <TextInput
        name="password"
        label="Password"
        value={password}
        onChange={onPasswordChange}
        error={error}
      />
      <Button onClick={onSubmit}>Sign In</Button>
    </Card>
  );
};
