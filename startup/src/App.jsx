// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapView from './components/MapView';
import ProfilePage from './components/ProfilePage';
import { DetailistPage, Home } from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detailist" element={<DetailistPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
