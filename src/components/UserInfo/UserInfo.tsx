import React from "react";
import { User } from "../../model/User";

interface UserInfoProps {
  user: User 
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  if (!user) {
    return <div>User information is not available.</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>User ID:</strong> {user.id}
      </p>
      <p>
        <strong>Username:</strong> {user.userName}
      </p>
      <div>
        <strong>User Groups:</strong>
        <ul>
          {user.userGroups.map((group, index) => (
            <li key={index}>{group}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Privileges:</strong>
        <ul>
          {user.privileges.map((privilege, index) => (
            <li key={index}>{privilege}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;