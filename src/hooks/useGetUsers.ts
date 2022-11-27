import { useQuery } from "react-query";
import api from "../api";
import { IUser } from "../api/types";

const useGetUsers = () =>
	useQuery<IUser[], Error>(
		"users",
		async () => (await api.get("/users")).data,
		{
			retry: false,
			refetchOnWindowFocus: false
		}
	);

export default useGetUsers;
