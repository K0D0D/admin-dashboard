import ReactModal, { Props } from "react-modal";

interface IProps extends Props {
	children?: React.ReactNode;
	onRequestClose?: () => void;
	[x: string]: any;
}

const Modal = ({ children, onRequestClose, ...rest }: IProps) => (
	<ReactModal
		overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex bg-slate-200 bg-opacity-20 z-[999] text-inherit backdrop-blur-sm cursor-zoom-out"
		className="m-auto max-w-lg w-full bg-slate-700 cursor-auto"
		onRequestClose={onRequestClose}
		shouldCloseOnEsc
		shouldCloseOnOverlayClick
		{...rest}
	>
		<button
			className="fixed top-2 left-2 p-0.5 text-white text-xl font-bold transition duration-200 hover:opacity-50"
			onClick={onRequestClose}
		>
			&#x2715;
		</button>
		<div className="mx-auto">{children}</div>
	</ReactModal>
);

export default Modal;
