import { useParams } from "react-router-dom";
import { useAllUsers } from "@src/api/hooks/useUsers";
import { Skeleton } from "@src/components/atoms/Skeleton";
import { useMemo } from "react";
import MailIcon from "@src/components/atoms/MailIcon";
import PhoneIcon from "@src/components/atoms/PhoneIcon";
import GlobeIcon from "@src/components/atoms/GlobeIcon";
import PinIcon from "@src/components/atoms/PinIcon";
import BackButton from "@src/components/molecules/BackButton";
import BuildingIcon from "@src/components/atoms/BuildingIcon";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getUserById, isLoading } = useAllUsers();

  const user = useMemo(() => {
    return id ? getUserById(parseInt(id)) : undefined;
  }, [id, getUserById]);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-8 w-32 mb-6" />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <Skeleton className="h-10 w-3/4 mb-6" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <BackButton />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {user?.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">@{user?.username}</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MailIcon />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-white">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-gray-900 dark:text-white">{user?.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <GlobeIcon />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Website
                  </p>
                  <a
                    href={`https://${user?.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {user?.website ? user?.website : "N/A"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Address
            </h3>
            <div className="flex items-start">
              <PinIcon />
              {user?.address?.street || user?.address?.city ? (
                <div>
                  <p className="text-gray-900 dark:text-white">
                    {user?.address.street} {user?.address.suite}
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    {user?.address.city} {user?.address.zipcode}
                  </p>
                </div>
              ) : (
                <p className="text-gray-900 dark:text-white">No address</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Company
            </h3>
            <div className="flex items-start">
              <BuildingIcon />
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  {user?.company.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  {user?.company?.catchPhrase || "No catchphrase"}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  {user?.company?.bs || "No business slogan"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
