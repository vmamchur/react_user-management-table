import UserFilters from "../user-filters";
import UserTable from "../user-table";

import styles from './styles.module.scss';

const UserManagement = () => {
  return (
    <div className={styles.userManagement}>
      <UserFilters />
      <UserTable />
    </div>
  );
};

export default UserManagement;
