import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import GlobalStyles from 'styles/GlobalStyles';
import App from 'App';
import 'styles/normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </>,
);
