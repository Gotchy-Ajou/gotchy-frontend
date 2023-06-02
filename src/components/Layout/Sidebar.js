import UserSideNavigation from "./UserSideNavigation";
import AdminSideNavigation from "./AdminSideNavigation";
import { useSelector } from 'react-redux';

  function Sidebar() {

    const user_option = useSelector((state => state.user_option))


    return (
        <div>
        {
            (user_option == 1)
            ?
            <UserSideNavigation/>
            :
            null
        }
        {
            (user_option == 2)?
            <AdminSideNavigation/>
            :
            null
        }
        </div>
    );
  }

  export default Sidebar;