import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchUsersAsync } from "../../redux/users-slice";
import Table from "../ui/table";

const UserTable = () => {
  const { filteredUsers, status, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const tableData = useMemo(
    () =>
      filteredUsers.map((user) => ({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      })),
    [filteredUsers]
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  if (filteredUsers.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <Table
      columns={["Name", "Username", "Email", "Phone"]}
      data={tableData}
    />
  );
};

export default UserTable;
