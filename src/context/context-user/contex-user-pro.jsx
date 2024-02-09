import React from 'react'
import { redux } from './reducer';
import { number } from './states';

export const UserContex = React.createContext(number);

export const ContexuserPro = ({children}) => {
     const [data, datepatch] = React.useReducer(redux,number);
     console.log(data);

  return (
    <UserContex.Provider value={{userData: data, userDatapatch: datepatch}}>{children}</UserContex.Provider>
  )
}
