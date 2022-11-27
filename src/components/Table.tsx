import Row from "./Row";

const DUMMY_DATA = [
	{
		id: "1",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "2",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "3",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "4",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "5",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "6",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "7",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "8",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "9",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	},
	{
		id: "10",
		name: "John Brown",
		email: "john.brown@gmail.com",
		phone: "12345678910",
		location: "Some location",
		address: "Some address"
	}
];

const Table = () => (
	<table className="w-full text-center break-words bg-white">
		<thead>
			<tr>
				{["Name", "E-mail", "Phone", "Location", "Address"].map(
					(heading, index) => (
						<th className="p-3 max-w-[12rem] border font-medium" key={index}>
							{heading}
						</th>
					)
				)}
			</tr>
		</thead>
		<tbody>
			{DUMMY_DATA.map((user) => (
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
);

export default Table;
