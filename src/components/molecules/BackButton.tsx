import { useNavigate } from "react-router-dom";
import BackIcon from "../atoms/BackIcon.tsx";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
    >
      <BackIcon />
      Back
    </button>
  );
};

export default BackButton;
