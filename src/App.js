import './App.scss';
import Navigations from "./navigation/Navigations";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {initialSuggestion} from "./store/slices/suggestionSlice";

function App() {
  const {sortProductRequest} = useSelector(state => state.suggestion);

  useEffect(()=>{
    if (sortProductRequest.length === 0) {
      dispatch(initialSuggestion());
    }
  },[]);
  return (
    <Navigations />
  );
}

export default App;
