import { Login, Logout } from "./actions";

const init = {isLoggedIn:false,role:null};

export const reducer = (store = init, { type,payload}) => {
  switch (type) {
    case Login:return {...store,isLoggedIn:true,role:payload};
    case Logout:return {...store,isLoggedIn:false,role:null};
    default: return store;
  }
};
