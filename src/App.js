import './App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import FirstFold from './components/FirstFold/firstFold';
import BlogPreview from './components/BlogPreview/BlogPreview';

/* https://public-api.wordpress.com/rest/v1.1/sites/$site/posts/$post_ID
http://allanmoses.ninja/?p=5 */
/*   axios.get("https://public-api.wordpress.com/rest/v1.1/sites/allanmoses.ninja/posts/5")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */

  /* axios.get(`http://allanmoses.ninja/wp-json/wp/v2/unsolicited`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */
const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<FirstFold />} />
      </Route>
    </Routes>


  );
}

export default App;
