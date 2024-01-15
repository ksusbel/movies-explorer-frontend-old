import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import "../Main/Main";
import "../Footer/Footer";
import "../Movies/Movies";
import "../Register/Register";
import "../Login/Login";
import "../Profile/Profile";
import "../NotFoundPage/NotFoundPage";
import "./App.css";
import Main from "../Main/Main";

function App() {
    return (
      <div className="page">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/saved-movies" element={<SavedMovies/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>          
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }

export default App;