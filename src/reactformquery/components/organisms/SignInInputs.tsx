import { memo } from 'react';
import { Card, Button } from '../atoms';
import { TextInput } from '../molecules';

export const SignInInputs = memo(() => (
  <Card innerAlignment="vertical">
    <TextInput name="email" label="Email" />
    <TextInput name="password" label="Password" />
    <Button type="submit">Sign In</Button>
  </Card>
));

SignInInputs.displayName = 'SignInInputs';
