import ReactModal, { Props } from "react-modal";
import twclsx from "../utils/twclsx";

interface IProps extends Props {
	overlayClassName?: string;
	className?: string;
	children?: React.ReactNode;
	onRequestClose?: () => void;
	[x: string]: any;
}

const Modal = ({
	overlayClassName,
	className,
	children,
	onRequestClose,
	...rest
}: IProps) => (
	<ReactModal
		overlayClassName={twclsx(
			"fixed top-0 left-0 right-0 bottom-0 flex z-[999] text-inherit cursor-zoom-out",
			"bg-slate-200 bg-opacity-20 backdrop-blur-sm",
			overlayClassName
		)}
		className={twclsx("m-auto max-w-lg w-full bg-slate-700 cursor-auto", className)}
		onRequestClose={onRequestClose}
		shouldCloseOnEsc
		shouldCloseOnOverlayClick
		closeTimeoutMS={500}
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
