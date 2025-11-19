import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUser } from "../users";
import { useLocalStorage } from "./useLocalStorage";
import { useMemo } from "react";
import type { User } from "../../types/user";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    enabled: !!id,
  });
};

export const useAllUsers = () => {
  const { data: apiUsers, isLoading, error } = useUsers();
  const [localUsers, setLocalUsers] = useLocalStorage<User[]>("localUsers", []);
  const [deletedApiUsers, setDeletedApiUsers] = useLocalStorage<number[]>(
    "deletedApiUsers",
    [],
  );

  const allUsers = useMemo(() => {
    const filteredApiUsers = (apiUsers || []).filter(
      (user) => !deletedApiUsers.includes(user.id),
    );
    return [...filteredApiUsers, ...localUsers];
  }, [apiUsers, localUsers, deletedApiUsers]);

  const addUser = (user: User) => {
    setLocalUsers([...localUsers, user]);
  };

  const updateUser = (updatedUser: User) => {
    const isLocal = localUsers.some((u) => u.id === updatedUser.id);
    if (isLocal) {
      // Update existing local user
      setLocalUsers(
        localUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
      );
    } else {
      // API user being edited: add to localUsers and mark original as deleted
      setLocalUsers([...localUsers, updatedUser]);
      setDeletedApiUsers([...deletedApiUsers, updatedUser.id]);
    }
  };

  const deleteUser = (id: number) => {
    const isLocal = localUsers.some((u) => u.id === id);
    if (isLocal) {
      setLocalUsers(localUsers.filter((user) => user.id !== id));
    } else {
      // Mark API user as deleted
      setDeletedApiUsers([...deletedApiUsers, id]);
    }
  };

  const getUserById = (id: number): User | undefined => {
    return allUsers.find((user) => user.id === id);
  };

  return {
    users: allUsers,
    isLoading,
    error,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
  };
};
