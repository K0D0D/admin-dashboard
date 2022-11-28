import { useMutation, useQueryClient } from "react-query";
import api from "../api";
import { IUser } from "../api/types";

const useCreateUser = () => {
	const queryClient = useQueryClient();

	return useMutation<Response, Error, IUser>(
		async (userData: IUser) => {
			const res = await api.post("/users", userData);

			return res.data;
		},
		{
			onSuccess: (newUser) => {
				queryClient.setQueryData("users", (old: any) => [...old, newUser]);
			}
		}
	);
};

export default useCreateUser;
