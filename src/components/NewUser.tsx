import Modal from "./Modal";
import { useForm } from "react-hook-form";
import useCreateUser from "../hooks/useCreateUser";
import Input from "./Input";
import { IUser } from "../api/types";
import { emailFieldRules } from "../utils/validation";
import twclsx from "../utils/twclsx";

interface IProps {
	isOpen: boolean;
	closeModal: () => void;
}

const NewUser = ({ isOpen, closeModal }: IProps) => {
	const { control, handleSubmit, reset } = useForm<IUser>({
		mode: "onTouched"
	});

	const { mutate: createUser, isLoading, error } = useCreateUser();

	const onSubmit = (data: IUser) => {
		createUser(data);

		reset();
	};

	return (
		<Modal
			className="px-6 py-8 max-w-sm rounded-md"
			isOpen={isOpen}
			onRequestClose={closeModal}
		>
			<h2 className="mb-4 text-xl font-medium text-white text-center">
				Add New User
			</h2>
			<form
				className="flex flex-col items-center space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input
					name="name"
					control={control}
					rules={{ required: true }}
					placeholder="Name"
					type="text"
					disabled={isLoading}
				/>
				<Input
					name="email"
					control={control}
					rules={emailFieldRules}
					placeholder="E-mail"
					type="email"
					disabled={isLoading}
				/>
				<Input
					name="phone"
					control={control}
					rules={{ required: true }}
					placeholder="Phone"
					type="tel"
					disabled={isLoading}
				/>
				<Input
					name="location"
					control={control}
					rules={{ required: true }}
					placeholder="Location"
					type="text"
					disabled={isLoading}
				/>
				<Input
					name="address"
					control={control}
					rules={{ required: true }}
					placeholder="Address"
					type="text"
					disabled={isLoading}
				/>
				<button
					className={twclsx(
						"px-2 py-1 w-full bg-green-600 text-white transition duration-200 hover:bg-green-700",
						"disabled:cursor-not-allowed disabled:opacity-80"
					)}
					disabled={isLoading}
				>
					Submit
				</button>
				{error && <p className="text-center text-red-500">{error.message}</p>}
			</form>
		</Modal>
	);
};

export default NewUser;
