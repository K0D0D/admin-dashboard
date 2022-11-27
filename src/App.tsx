import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<Wrapper>
			<Table />
		</Wrapper>
	</QueryClientProvider>
);

export default App;
