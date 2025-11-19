import { UserCard } from "../molecules/UserCard.tsx";
import type { User } from "../../types/user.ts";

type Props = {
  filteredUsers: User[];
  handleEditUser: (user: User) => void;
  handleDeleteUser: (id: number) => void;
};
const UserCardList = ({
  filteredUsers,
  handleEditUser,
  handleDeleteUser,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={handleDeleteUser}
          onEdit={handleEditUser}
        />
      ))}
    </div>
  );
};

export default UserCardList;
