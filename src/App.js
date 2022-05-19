import './App.scss';
import Navigations from "./navigation/Navigations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addSuggestionFromLocaleStorage, initialSuggestion} from "./store/slices/suggestionSlice";
import {ARRAY_SUGGESTION} from "./data/data";

function App() {
  const dispatch = useDispatch();
  const {productRequests, sortProductRequest} = useSelector(state => state.suggestion);

  useEffect(()=>{
    if(localStorage.getItem('ARRAY_SUGGESTION')) {
      console.log('test');
      console.log(localStorage.getItem('ARRAY_SUGGESTION'));
      console.log(JSON.parse(localStorage.getItem('ARRAY_SUGGESTION')));
      dispatch(addSuggestionFromLocaleStorage(JSON.parse(localStorage.getItem('ARRAY_SUGGESTION'))));
    }
    else if (sortProductRequest.length === 0) {
      console.log('LOAD DATA');
      dispatch(initialSuggestion());
    }

    return () => {
      localStorage.setItem('ARRAY_SUGGESTION', JSON.stringify(productRequests));
    }
  },[]);
  return (
    <Navigations />
  );
}

export default App;
