import Modal from "./Modal";

interface IProps {
	isOpen: boolean;
	closeModal: () => void;
}

const NewUser = ({ isOpen, closeModal }: IProps) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={closeModal}>
			<span className="text-white">The form goes here</span>
		</Modal>
	);
};

export default NewUser;
