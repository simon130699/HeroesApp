import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
import { types } from '../types/types';

const init =()=>{
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,//si el valor de logged es NULL retorna true
    user:user
  }
}
export const AuthProvider = ({children}) => {

const [authState,dispatch]=useReducer(authReducer,{}, init);

const login=(name='')=>{
const user = {id: 'abc', name}
  const action = {type: types.login, payload: user}

  localStorage.setItem('user',JSON.stringify(user));

  dispatch(action);
}
const logout = ()=>{
  localStorage.removeItem('user');
  const action = {type: types.logout};
  dispatch(action);
}
  return (
 <AuthContext.Provider value={{
  ...authState, 
  login:login,
  logout:logout
}}
 >
    {children}
 </AuthContext.Provider>
  );
}
