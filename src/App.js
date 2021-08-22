import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Styles
import GlobalStyle, { AppContainer } from "./helpers/styles/GlobalStyle";

// Pages
import Translate from "./pages/translate/Translate";
import Glossary from "./pages/glossary/Glossary";

// Components
	// Navigation

export default function App() {
	return (
    <>
		<GlobalStyle/>
		<AppContainer className="light-theme">
			<Router>
			{/* Header */}
			<Switch>
				<Route exact path="/" component={Translate}/>
				<Route exact path="/glossary" component={Glossary}/>
			</Switch>
			{/* Navigation */}
			</Router>
		</AppContainer>
    </>
	);
}