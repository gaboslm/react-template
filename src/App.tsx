import { Fragment } from 'react'
import { HelloWorld } from './components/hello-world'
import { GlobalStyle } from './styles/global'

export function App(): JSX.Element {
	return (
		<Fragment>
			<GlobalStyle />
			<HelloWorld />
		</Fragment>
	)
}
