
import { Outlet } from 'react-router-dom';

const AccountLayout = () => {
  return (
    <>
      <h2>Account Section</h2>
      <Outlet />
    </>
  );
}

export default AccountLayout