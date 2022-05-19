import './App.scss';
import Navigations from "./navigation/Navigations";
import {useEffect} from "react";
import {ARRAY_SUGGESTION} from "./data/data";
import {useSelector} from "react-redux";

function App() {
  const {productRequests} = useSelector(state => state.suggestion);

  useEffect( ()=>{
    localStorage.getItem(ARRAY_SUGGESTION);
    console.log(localStorage.getItem(ARRAY_SUGGESTION));
    return () => {
      localStorage.setItem(ARRAY_SUGGESTION, [...productRequests]);
    }
  }, [])

  return (
    <Navigations />
  );
}

export default App;
