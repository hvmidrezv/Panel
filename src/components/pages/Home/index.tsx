import { useState } from "react";
import FetchError from "../../molecules/FetchError.tsx";
import Header from "./Header.tsx";
import Main from "./Main.tsx";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  const error = false;

  const handleDeleteUser = (id: number) => {
    console.log("user:", id);
  };

  if (error) {
    return <FetchError />;
  }

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsModalOpen={setIsModalOpen}
      />

      <Main
        isLoading={false}
        filteredUsers={[]}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={() => {}}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Home;
