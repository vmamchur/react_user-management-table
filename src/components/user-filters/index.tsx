import { useAppDispatch } from "../../redux/hooks";
import { userActions } from "../../redux/users-slice";
import { IUserFilters } from "../../types/user-filters.interface";
import Input from "../ui/input";

import styles from './styles.module.scss';

const UserFilters = () => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (field: keyof IUserFilters, value: string) => {
    dispatch(userActions.setFilters({ field, value }));
  };

  return (
    <div className={styles.userFilters}>
      <h1>User Filters</h1>
      <div className={styles.inputContainer}>
        <Input
          onChange={(e) => handleFilterChange("name", e.target.value)}
          placeholder="Name"
        />

        <Input
          onChange={(e) => handleFilterChange("username", e.target.value)}
          placeholder="Username"
        />

        <Input
          onChange={(e) => handleFilterChange("email", e.target.value)}
          placeholder="Email"
        />

        <Input
          onChange={(e) => handleFilterChange("phone", e.target.value)}
          placeholder="Phone"
        />
      </div>
    </div>
  );
};

export default UserFilters;
