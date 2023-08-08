import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { THEME } from "../../constants";

const App = () => {
	const [sortId, setSortId] = React.useState("newest");

	return (
		<ThemeProvider theme={THEME}>
			<Header />
			<Main>
				<ShoeIndex sortId={sortId} setSortId={setSortId} />
			</Main>
		</ThemeProvider>
	);
};

const Main = styled.main`
	padding: 64px 32px;
	/* background-color: fuchsia; */

	@media ${(p) => p.theme.QUERIES.laptopAndSmaller} {
		/* background-color: yellow; */
	}

	@media ${(p) => p.theme.QUERIES.tabletAndSmaller} {
		/* background-color: red; */
	}

	@media ${(p) => p.theme.QUERIES.phoneAndSmaller} {
		/* background-color: cyan; */
	}
`;

export default App;
