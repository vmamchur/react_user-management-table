import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUsersAsync } from "../../redux/users-slice";
import Table from "../ui/table";

const UserTable = () => {
  const { filteredUsers } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <Table
      columns={["Name", "Username", "Email", "Phone"]}
      data={filteredUsers.map((user) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      }))}
    />
  );
};

export default UserTable;
