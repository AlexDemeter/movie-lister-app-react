import React, { useContext } from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './footer';
import MovieDetail from './moviedetails';
import { Route, Routes } from "react-router-dom"
import Landing from './landing';
import { SearchDataContextProvider } from './context/SearchProvider';


function App() {

  return (
    <React.StrictMode>
        <SearchDataContextProvider>
            <Nav />
            <Routes>
                <Route path='/' exact element={<Landing />}/>
                <Route path='/details/:movieid' element={<MovieDetail />} /> 
            </Routes>
        </SearchDataContextProvider>
        <Footer />
    </React.StrictMode>
  );
}

export default App;