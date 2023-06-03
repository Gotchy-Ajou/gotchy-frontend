import UserHeader from "./UserHeader";
import AdminHeader from "./AdminHeader";
import { useSelector } from 'react-redux';

function Header() {

  const user_option = useSelector((state => state.user_option))

  return (
    <div>
      {
        (user_option == 1)
          ?
          <UserHeader />
          :
          null
      }
      {
        (user_option == 2) ?
          <AdminHeader />
          :
          null
      }
    </div>
  );
}

export default Header;
