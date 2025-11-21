import ErrorIcon from "@src/components/atoms/ErrorIcon";

const FetchError = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <ErrorIcon />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Failed to load users
        </h3>
        <p className="text-gray-600 dark:text-gray-400">An error occurred</p>
      </div>
    </div>
  );
};

export default FetchError;
