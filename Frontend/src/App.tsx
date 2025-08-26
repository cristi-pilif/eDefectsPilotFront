import './App.css'
import DefectListPage from './pages/DefectsListPage';
import DefectCreatePage from './pages/DefectCreatePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import DefectViewPage from './pages/DefectViewPage';
import DefectPaginationPage from './pages/DefectPaginationPage';



function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefectListPage />} />
          <Route path="/create" element={<DefectCreatePage />} />
          <Route path="/defects/:id" element={<DefectViewPage />} />
          <Route path="/defects" element={<DefectPaginationPage />} />
        </Routes>
      </Router>
    </>
   
   
  );
}

export default App
