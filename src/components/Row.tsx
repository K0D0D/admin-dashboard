interface IProps {
	name: string;
	email: string;
	phone: string;
	location: string;
	address: string;
}

const Row = (props: IProps) => (
	<tr className="even:bg-zinc-100">
		{Object.values(props).map((prop, index) => (
			<td className="p-3 max-w-[14rem] border" key={index}>
				{prop}
			</td>
		))}
	</tr>
);

export default Row;
