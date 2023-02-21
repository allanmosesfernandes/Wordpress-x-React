import './App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import FirstFold from './components/FirstFold/firstFold';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Blog from './components/BlogArticle/BlogArticle';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
        <Route path='blog/:slug' element={<Blog />} />
      </Route>
      
    </Routes>


  );
}

export default App;
