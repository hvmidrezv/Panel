import { SearchBar } from "@src/components/molecules/SearchBar";
import AddButton from "@src/components/molecules/AddButton";

type Props = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
};

const Header = ({ searchQuery, setSearchQuery, setIsModalOpen }: Props) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name or email..."
        />
      </div>
      <AddButton setIsModalOpen={() => setIsModalOpen(true)} />
    </div>
  );
};

export default Header;
