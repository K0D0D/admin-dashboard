import Row from "./Row";
import Spinner from "./Spinner";
import useGetUsers from "../hooks/useGetUsers";

const Table = () => {
	const { data, isLoading, error } = useGetUsers();

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : error ? (
				<p className="p-3 text-center text-red-500">{error.message}</p>
			) : (
				<table className="w-full text-center break-words bg-white">
					<thead>
						<tr>
							{["Name", "E-mail", "Phone", "Location", "Address"].map(
								(heading, index) => (
									<th
										className="p-3 max-w-[12rem] border font-medium"
										key={index}
									>
										{heading}
									</th>
								)
							)}
						</tr>
					</thead>
					<tbody>
						{data?.map((user) => (
							<Row
								name={user.name}
								email={user.email}
								phone={user.phone}
								location={user.location}
								address={user.address}
								key={user.id}
							/>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default Table;
