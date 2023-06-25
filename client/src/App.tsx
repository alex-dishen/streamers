import { PAGES } from 'constants';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Streamer from 'pages/Streamer';

const App = () => {
  return (
    <Routes>
      <Route path={PAGES.HOME} element={<Home />} />
      <Route path={PAGES.STREAMER} element={<Streamer />} />
    </Routes>
  );
};

export default App;
