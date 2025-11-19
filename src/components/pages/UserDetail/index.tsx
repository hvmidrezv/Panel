import { useParams } from "react-router-dom";
import { Skeleton } from "../../atoms/Skeleton";
import MailIcon from "../../atoms/MailIcon.tsx";
import PhoneIcon from "../../atoms/PhoneIcon.tsx";
import GlobeIcon from "../../atoms/GlobeIcon.tsx";
import PinIcon from "../../atoms/PinIcon.tsx";
import BackButton from "../../molecules/BackButton.tsx";
import BuildingIcon from "../../atoms/BuildingIcon.tsx";

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const isLoading = false;
  console.log(id);

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
            "Data"
          </h1>
          <p className="text-gray-600 dark:text-gray-400"> "Data"</p>
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
                  <p className="text-gray-900 dark:text-white"> "Data"</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="text-gray-900 dark:text-white"> "Data"</p>
                </div>
              </div>

              <div className="flex items-start">
                <GlobeIcon />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Website
                  </p>
                  <a
                    href={`https://test`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    "Data"
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
              "Data"
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
                  "Data"
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  "Data"
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  "Data"
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
