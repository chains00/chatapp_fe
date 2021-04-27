import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./app.jsx";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<React.Suspense
				fallback={
					<div>
						<h1>Loading component...</h1>
					</div>
				}
			>
				<App />
			</React.Suspense>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}