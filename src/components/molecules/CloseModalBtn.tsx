import CloseIcon from "@src/components/atoms/CloseIcon";

type Props = {
  handleClose: () => void;
};
const CloseModalBtn = ({ handleClose }: Props) => {
  return (
    <button
      onClick={handleClose}
      type="button"
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      <CloseIcon />
    </button>
  );
};

export default CloseModalBtn;
