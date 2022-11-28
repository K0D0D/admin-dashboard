import { RegisterOptions } from "react-hook-form";

export type IRules = Exclude<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;

export const emailFieldRules: IRules = {
	required: true,
	minLength: {
		value: 6,
		message: "The user's email must be between 6 and 64 characters long"
	},
	maxLength: {
		value: 64,
		message: "The user's email must be between 6 and 64 characters long"
	},
	pattern: {
		value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		message: "Please enter a valid e-mail address"
	}
};