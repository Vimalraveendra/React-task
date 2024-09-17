import { IUserData } from "../../redux/users/users.types";

const UserManagementTableRow = ({ name, username, email, phone }:IUserData) => {
  return (
    <tr>
      <td data-label="name">{name}</td>
      <td data-label="userName">{username}</td>
      <td data-label="email">{email}</td>
      <td data-label="phone">{phone}</td>
    </tr>
  );
};

export default UserManagementTableRow;
