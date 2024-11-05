import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import cardsData from "../cards.json";

export const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type == "ALL_CARDS_DATA") {
    return {
      ...state,
      cardsData: action.payload,
    };
  }
};

export const AppProvider = ({ children }) => {
  const initialState = {
    cardsData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCards = () => {
    dispatch({ type: "ALL_CARDS_DATA", payload: cardsData });
  };

  useEffect(() => {
    getCards();
  }, []);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};
