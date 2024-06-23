import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import './app.css'
import Header from './components/Header';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <EmployeeTable searchQuery={searchQuery} />
    </div>
  )
}

export default App
