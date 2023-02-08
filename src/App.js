import './App.css';
import axios from "axios";


/* https://public-api.wordpress.com/rest/v1.1/sites/$site/posts/$post_ID
http://allanmoses.ninja/?p=5 */
/*   axios.get("https://public-api.wordpress.com/rest/v1.1/sites/allanmoses.ninja/posts/5")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  }); */
function App() {

axios.get(`http://allanmoses.ninja/wp-json/wp/v2/unsolicited`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
