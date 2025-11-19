import UserIcon from "../atoms/UserIcon.tsx";

type Props = {
  searchQuery: string;
};

const NoUserError = ({ searchQuery }: Props) => {
  return (
    <div className="text-center py-12">
      <UserIcon />
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        {searchQuery ? "No users found" : "No users available"}
      </p>
    </div>
  );
};

export default NoUserError;
