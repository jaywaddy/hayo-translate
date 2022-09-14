import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Styles
import GlobalStyle, { AppContainer } from "./helpers/styles/GlobalStyle";

// Pages
import TranslatePage from "./pages/translate/TranslatePage";
import GlossaryPage from "./pages/glossary/GlossaryPage";

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
					<Route exact path="/" component={TranslatePage} />
					<Route exact path="/glossary" component={GlossaryPage} />
				</Switch>
				<Navigation />
			</BrowserRouter>
		</AppContainer>
		</>
	);
}