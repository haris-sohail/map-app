import './App.css';
import Map from './components/Map';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [locations, setLocations] = useState([[33.6995, 73.0363]]);

  const handleSearch = (search) => {
    setLocations(search);
  };

  return (
    <div className="App relative h-screen">
      <SearchBar onSearch={handleSearch} />
      <Map locations={locations} />
    </div>
  );
}

export default App;
