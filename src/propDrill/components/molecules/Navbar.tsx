import { Button } from '../atoms';

interface Props {
  loggedInUser: string | null;
  logOut: () => void;
}

export const Navbar = ({ loggedInUser, logOut }: Props) => (
  <div className="flex justify-between items-center p-4 bg-gray-200">
    <div className="justify-self-end">
      <h3 className="text-lg font-bold">{loggedInUser}</h3>
      <Button onClick={logOut}>Log out</Button>
    </div>
  </div>
);
