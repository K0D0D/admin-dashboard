import { useState } from "react";
import twclsx from "../utils/twclsx";
import NewUser from "./NewUser";

interface IProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children: React.ReactNode;
	className?: string;
	[x: string]: any;
}

const Wrapper = ({ children, className, ...rest }: IProps) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const toggleIsOpen = () => setIsModalOpen(!isModalOpen);

	return (
		<div
			className={twclsx(
				"max-w-6xl min-h-[10rem] my-5 mx-auto shadow-xl pb-1 bg-slate-700",
				className
			)}
			{...rest}
		>
			<div className="p-3 flex justify-between">
				<h1 className="text-xl font-bold text-white">
					<span className="font-medium">Manage</span> Users
				</h1>
				<button
					className="px-2 py-1 bg-green-600 text-white transition duration-200 hover:bg-green-700"
					onClick={toggleIsOpen}
				>
					Add New User
				</button>
			</div>
			<div className="overflow-x-auto">{children}</div>
			<NewUser isOpen={isModalOpen} closeModal={toggleIsOpen} />
		</div>
	);
};

export default Wrapper;
