import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Alert } from './components/Alert';
import { AlertState } from './Context/alert/AlertState';
import Navbar from './components/Navbar';
import { FirebaseState } from './Context/Firebase/FirebaseState';

function App() {
  const navs = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
  ];

  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar navs={navs} />
          <Alert text="text" />
          <div className="container pt4 mt-4">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
