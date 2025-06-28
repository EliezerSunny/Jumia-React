import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NorHeader from './NorHeader';
import NorFooter from './NorFooter';

import Body from './Body'; // Home page
import MainContent from './MainContent'; // Dashboard or any other route

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <NorHeader />

              <nav className="p-4">
        <Link to="/" className="mr-4">Home</Link> 
        <Link to="#" className="mr-4"><i className="fa fa-angle-right"></i></Link> 
        <Link to="/dashboard">Dashboard</Link>
      </nav>

              <Body />
              <NorFooter />
            </>
          }
        />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <>
              {/* <NorHeader /> */}
              <MainContent />
              {/* <NorFooter /> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
