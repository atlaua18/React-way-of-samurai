import React from "react";
import store from "./redux/reduxStore";

export const StoreContext = React.createContext(store); // ДОЛЖНО БЫТЬ null !!!!!!!!!!!!!!!!!!!!!!!!!

// const Provider = (props: { store: IReduxStore; children: {} }) => {
//     return (
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };
