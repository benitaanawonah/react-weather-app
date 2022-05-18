
import './App.css';
import Weather from './weather';

export default function App() {
  return <div className="App">
    <div class="container">
   
   <Weather defaultCity="Lagos" />
  


   <footer>This project was coded by Benita Anawonah and is {" "}
   <a href='https://github.com/benitaanawonah/react-weather-app' target='_blank'>
     open-sourced on Github
   </a>
   </footer>
    </div>
    </div>
  
}


