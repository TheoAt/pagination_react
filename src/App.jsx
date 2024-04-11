import { useState } from 'react';
import './App.css';
import Main from './components/Main';

function App() {

  const data = Array.from({length : 100}, (_, index) => ({
    id : index + 1,
    name : `Produit ${index + 1}`
  }))

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentListItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className='main-container'>
      <h1 className="main-title">Pagination with React</h1>
      
      <ul className="list-content">
        {currentListItems.map((item) => (
          <li className='list-item' key={item.id}>{item.name}</li>
        ))}
      </ul>

      <Main 
        currentPage={currentPage} 
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
