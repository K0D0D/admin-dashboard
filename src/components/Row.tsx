import twclsx from "../utils/twclsx";

interface IProps {
	className?: string;
	name: string;
	email: string;
	phone: string;
	location: string;
	address: string;
}

const Row = ({ className, name, email, phone, location, address }: IProps) => (
	<tr className={twclsx("even:bg-zinc-100", className)}>
		<td className="p-3 max-w-[14rem] border">{name}</td>
		<td className="p-3 max-w-[14rem] border">{email}</td>
		<td className="p-3 max-w-[14rem] border">{phone}</td>
		<td className="p-3 max-w-[14rem] border">{location}</td>
		<td className="p-3 max-w-[14rem] border">{address}</td>
	</tr>
);

export default Row;
