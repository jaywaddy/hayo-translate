import React from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";

// Styles
import GlobalStyle, { AppContainer } from "./helpers/styles/GlobalStyle";

// Pages
import Translate from "./pages/translate/Translate";
import Glossary from "./pages/glossary/Glossary";

// Components
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer className="light-theme">
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={Translate} />
						<Route exact path="/glossary" component={Glossary} />
					</Switch>
					<Navigation />
				</BrowserRouter>
			</AppContainer>
		</>
	);
}