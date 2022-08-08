import { LOCAL_STORAGE } from "../enum/localStorage";


export const getFromStaorageAndUpdateState = (
    nameInLocalStorage: string,
    //any function 
    setState:(...args: any) => any, 
    initialState:any) =>{
    try {
    const itemsFromStorage = localStorage.getItem(nameInLocalStorage)
    ? JSON.parse(localStorage.getItem(nameInLocalStorage) || "")
    : initialState
    setState(itemsFromStorage) 
    }catch (err) {
        console.log('error', err);
    }
}


export const setLocalStaorageAndUpdateState = (
    nameInLocalStorage: string, 
    item:any,
    setState:any) =>{
    localStorage.setItem(nameInLocalStorage,JSON.stringify(item))
    setState(item) 
}


export const removeFromStorageAndUpdateState = (
    nameInLocalStorage:string,
    setState:(...args: any) => any,
    initialState:any
    ) =>{
    localStorage.removeItem(nameInLocalStorage)
    setState(initialState)  
}


export const isAdmin = () =>{
    const isAdmin = localStorage.getItem(LOCAL_STORAGE.IS_ADMIN)
     ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.IS_ADMIN) || "")
     : ''

     const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
     ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.TOKEN) || "")
     : ''

     if(isAdmin && token){
         return true
     }

     return false
     
 }


 export const extractToken=()=>{
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.TOKEN) || "")
      : ''

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }

      return config
 }

 export function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}
  