import { useUserContext } from '../../contexts/UserContext';
import { Button } from '../atoms';

export const Navbar = () => {
  const [user, setUser] = useUserContext();

  console.log(user);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div className="justify-self-end">
        <h3 className="text-lg font-bold">{user}</h3>
        <Button onClick={() => setUser(null)}>Log out</Button>
      </div>
    </div>
  );
};
