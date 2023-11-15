import { LogoIcon } from "./assets/icons"
import CrudUser from "./components/CrudUser"
import "./styles/App.css"

function App() {
	return (
		<>
		{/*Estrutura do documento em JSX, mais os componentes  "<LogoIcon />" e "<CrudUser />"*/}
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

export default App
