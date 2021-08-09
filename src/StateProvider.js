import React,{createContext,useContext,useReducer} from "react";

//Preapre the data layer
export const StateContext = createContext();

//Wrap the app with the data layer
export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useBasketValue = () => useContext(StateContext);