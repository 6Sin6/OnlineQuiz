import { render } from 'preact'
import App from './components/App';
import './index.css'

//Global Varible saved in Window only
window.LOGEDIN=false
window.UserName="Guest"

render(<App />, document.getElementById('app'))
