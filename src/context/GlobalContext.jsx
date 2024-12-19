import { createContext, useContext, useReducer } from "react"
import ReducerApp from "./reducerApp";
import { initialState } from "./reducerApp";
const GlobalState = createContext()
const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(ReducerApp, initialState);
  return (
    <GlobalState.Provider value={{ user: state.user, basket: state.basket, dispatch: dispatch}}>
      {children}
    </GlobalState.Provider>
  )
}

export default GlobalProvider;
export const AppData = ()=> {
  return useContext(GlobalState);
}