import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState([33.6995, 73.0363]);

  const handleSearch = (search) => {
    setLocation(search.split(' ').map(Number));
  }

  return (
    <div className="App relative h-screen">
      <SearchBar onSearch={handleSearch} />
      <Map location={location} />
    </div>
  );
}

export default App;
