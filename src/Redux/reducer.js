import { Login, Logout } from "./actions";

const init = {isLoggedIn:false,user:null};

export const reducer = (store = init, { type,payload}) => {
  switch (type) {
    case Login:return {...store,isLoggedIn:true,user:payload};
    case Logout:return {...store,isLoggedIn:false,user:null};
    default: return store;
  }
};
