import { useController } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";
import twclsx from "../utils/twclsx";
import { IRules } from "../utils/validation";

interface IProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name: string;
	control: Control<any>;
	rules?: IRules;
	defaultValue?: any;
	containerClassName?: string;
	inputClassName?: string;
	errorClassName?: string;
	[x: string]: any;
}

const Input = ({
	name,
	control,
	rules,
	defaultValue = "",
	containerClassName,
	inputClassName,
	errorClassName,
	...rest
}: IProps) => {
	const { field, fieldState } = useController({
		name,
		control,
		rules,
		defaultValue
	});

	const { error } = fieldState;

	return (
		<div className={twclsx("w-full", containerClassName)}>
			<input
				className={twclsx(
					"w-full px-2 py-1 disabled:cursor-not-allowed disabled:opacity-80",
					inputClassName,
					error && "border border-red-500"
				)}
				{...field}
				{...rest}
			/>
			{error && (
				<p className={twclsx("mt-0.5 text-red-500", errorClassName)}>
					{error?.message}
					{error?.type === "required" && "This field is required"}
				</p>
			)}
		</div>
	);
};

export default Input;
