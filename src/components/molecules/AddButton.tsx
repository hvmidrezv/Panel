import PlusIcon from "@src/components/atoms/PlusIcon";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
};

const AddButton = ({ setIsModalOpen }: Props) => {
  return (
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
    >
      <PlusIcon />
      Add User
    </button>
  );
};

export default AddButton;
