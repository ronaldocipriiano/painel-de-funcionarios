import React, { useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import SearchBar from './components/SearchBar';
import './app.css'

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <EmployeeTable searchQuery={searchQuery} />
    </div>
  )
}

export default App
