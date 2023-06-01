import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import App from "./App"

import { store, persistor } from "./store"
import ThemeProvider from "./utils/theme"

import "./assets/styles/style.scss"
import ScrollToTop from "@utils/ScrollToTop"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider>
				<PersistGate loading={null} persistor={persistor}>
					<ScrollToTop />
					<App />
				</PersistGate>
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
)
