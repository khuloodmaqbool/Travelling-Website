import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./main-context";

export const FilterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        allCards: [...action.payload],
        filterCards: [...action.payload],
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS": {
      const { duration, location, people, continent } = state.filter;
      const { allCards } = state;

      let filteredItems = [...allCards];

      if (duration !== "All") {
        filteredItems = filteredItems.filter(
          (crnt) => crnt.duration === duration
        );
      }

      if (location !== "All") {
        filteredItems = filteredItems.filter(
          (crnt) => crnt.location === location
        );
      }

      if (people !== "All") {
        filteredItems = filteredItems.filter(
          (crnt) => crnt.people == people
        );
      }

      if (continent !== "All") {
        filteredItems = filteredItems.filter(
          (crnt) => crnt.continent == continent
        );
      }

      return {
        ...state,
        filterCards: filteredItems,
      };
    }

    case "SORT_VALUE":
      // Return entire state, not just sort_value (fixed issue here)
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let sortedCards;
      const { sort_value, filterCards } = state;
      const cards = [...filterCards]; 

      if (sort_value === "highest") {
        sortedCards = cards.sort((a, b) => b.price - a.price); // Sort by highest price
      } else if (sort_value === "lowest") {
        sortedCards = cards.sort((a, b) => a.price - b.price); // Sort by lowest price
      }else if (sort_value === "default") {
        sortedCards = cards; 
      }

      return {
        ...state,
        filterCards: sortedCards,
      };


    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const { cardsData } = useContext(AppContext);

  const initialState = {
    allCards: [],
    filterCards: [],
    sort_value: "",
    filter: {
      duration: "All",
      location: "All",
      people: "All",
      continent: "All",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    dispatch({ type: "FILTER_PRODUCTS" });
  };

  const sorting = (event) => {
    const { value } = event.target;
    dispatch({ type: "SORT_VALUE", payload: value });
    dispatch({ type: "SORTING_PRODUCTS" }); 
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: cardsData });
  }, [cardsData]); 


  return (
    <FilterContext.Provider
      value={{
        ...state,
        handleFilterChange,
        sorting,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
