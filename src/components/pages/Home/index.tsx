import { useMemo, useState } from "react";
import { useAllUsers } from "@src/api/hooks/useUsers";
import { UserModal } from "@src/components/organisms/UserModal";
import type { NewUser, User } from "@src/types/user";
import FetchError from "@src/components/molecules/FetchError";
import Header from "./Header";
import Main from "./Main";

const Home = () => {
  const {
    users: allUsers,
    isLoading,
    error,
    addUser,
    updateUser,
    deleteUser,
  } = useAllUsers();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    return allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allUsers, searchQuery]);

  const handleAddUser = (newUser: NewUser) => {
    const user: User = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      username:
        newUser.username || newUser.name.toLowerCase().replace(/\s/g, ""),
      phone: newUser.phone || "",
      website: newUser.website || "",
      address: {
        street: newUser.address?.street || "",
        suite: newUser.address?.suite || "",
        city: newUser.address?.city || "",
        zipcode: newUser.address?.zipcode || "",
        geo: {
          lat: newUser.address?.geo?.lat || "",
          lng: newUser.address?.geo?.lng || "",
        },
      },
      company: {
        name: newUser.company.name,
        catchPhrase: newUser.company.catchPhrase || "",
        bs: newUser.company.bs || "",
      },
    };
    addUser(user);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleSaveUser = (user: User) => {
    updateUser(user);
    setEditingUser(null);
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
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

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="add"
        onAdd={handleAddUser}
      />

      <Main
        isLoading={isLoading}
        filteredUsers={filteredUsers}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
        searchQuery={searchQuery}
      />

      {editingUser && (
        <UserModal
          isOpen={true}
          onClose={() => setEditingUser(null)}
          mode="edit"
          onSave={handleSaveUser}
          user={editingUser}
        />
      )}
    </div>
  );
};

export default Home;
