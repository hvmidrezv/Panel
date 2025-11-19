export const Skeleton = ({ className = '' }: { className?: string }) => {
    return (
        <div
            className={`animate-pulse bg-gray-300 dark:bg-gray-700 rounded ${className}`}
        />
    );
};

export const UserCardSkeleton = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    );
};