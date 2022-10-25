import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Styles
import GlobalStyle, { AppContainer } from "./helpers/styles/GlobalStyle";

// Pages
import TranslatePage from "./pages/translate/TranslatePage";
import GlossaryPage from "./pages/glossary/GlossaryPage";

// Components
import AppHeader from "./components/appHeader/AppHeader";
import Navigation from "./components/navigation/Navigation";

export default function App() {
	return (
		<>
		<GlobalStyle />
		<AppContainer className="light-theme">
			<BrowserRouter>
				<AppHeader />
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