import './App.scss';
import Navigations from "./navigation/Navigations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initialSuggestion} from "./store/slices/suggestionSlice";
import {ARRAY_SUGGESTION} from "./data/data";

function App() {
  const dispatch = useDispatch();
  const {productRequests} = useSelector(state => state.suggestion);

  useEffect(()=>{
    if(localStorage.getItem(ARRAY_SUGGESTION)) {
      dispatch(addSuggestionFromLocaleStorage(...JSON.parse(localStorage.getItem(ARRAY_SUGGESTION))))
    }
    else if (productRequests.length === 0) {
      dispatch(initialSuggestion());
    }

    return () => {
      localStorage.setItem(ARRAY_SUGGESTION, JSON.stringify(productRequests));
    }
  },[]);
  return (
    <Navigations />
  );
}

export default App;
