import { UserCardSkeleton } from "../../atoms/Skeleton.tsx";
import type { User } from "../../../types/user.ts";
import UserCardList from "../../organisms/UserCardList.tsx";
import NoUserError from "../../molecules/NoUserError.tsx";

type Props = {
  searchQuery: string;
  filteredUsers: User[];
  handleEditUser: (user: User) => void;
  handleDeleteUser: (id: number) => void;
  isLoading: boolean;
};

const Main = ({
  searchQuery,
  filteredUsers,
  handleEditUser,
  handleDeleteUser,
  isLoading,
}: Props) => {
  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((_, index) => (
            <UserCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredUsers.length === 0 ? (
        <NoUserError searchQuery={searchQuery} />
      ) : (
        <UserCardList
          filteredUsers={filteredUsers}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      )}
    </>
  );
};

export default Main;
