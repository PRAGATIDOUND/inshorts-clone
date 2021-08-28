

import axios from "axios";
import {useEffect, useState} from "react";
import './App.css';
import Navinshorts from './Components/Navinshorts';
import NewsContent from './Components/NewsContents/NewsContent';

import Footer from "./Components/Footer/Footer";
function App() {
  const [category,setCategory]= useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadMore] = useState(20);
  const [newsResults, setNewsResults] = useState();
  console.log(process.env);
  
  const newsApi=async ()=>{
    try {
      
      const news =await axios.get(
         `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
         
        );

      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
   newsApi();
  }, [newsResults,loadMore,category]);
  return (

    <div className="App">
      <Navinshorts setCategory={setCategory}/>
      <NewsContent 
      newsArray={newsArray} 
      newsResults={newsResults}
      loadMore={loadMore}
      setLoadMore={setLoadMore}
       />
      <Footer/>
    </div>
  );
}

export default App;
