import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import LogIn from "./pages/login";


function App(){
	return(
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={Home}/>;
				<Route path="/login" component={LogIn}/>;
			</Switch>
		</React.Fragment>
	);
}

export default App;