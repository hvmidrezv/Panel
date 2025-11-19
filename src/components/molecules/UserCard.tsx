import { Link } from "react-router-dom";
import type { User } from "../../types/user";
import EditIcon from "../atoms/EditIcon.tsx";
import DeleteIcon from "../atoms/DeleteIcon.tsx";

// UserCard component props interface
interface UserCardProps {
  user: User;
  onDelete?: (id: number) => void;
  onEdit?: (user: User) => void;
}

export const UserCard = ({ user, onDelete, onEdit }: UserCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {user.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            {user.email}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            {user.company.name}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to={`/user/${user.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center transition-colors"
        >
          View Details
        </Link>
        {onEdit && (
          <button
            onClick={() => onEdit(user)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            title="Edit"
          >
            <EditIcon />
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(user.id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            title="Delete"
          >
            <DeleteIcon />
          </button>
        )}
      </div>
    </div>
  );
};
