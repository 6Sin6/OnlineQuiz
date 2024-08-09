import { render } from 'preact'
import App from './components/App';
import './index.css'
import { GlobalProvider } from './context/GlobalContext';

//Global Varible saved in Window only
window.LOGEDIN=false
window.profilePicUrl="https://th.bing.com/th/id/OIP.PRyT3WbMgUpQFp8uD_qudQAAAA?rs=1&pid=ImgDetMain"

render(
    <GlobalProvider>
      <App />
    </GlobalProvider>,
    document.getElementById('app')
  );