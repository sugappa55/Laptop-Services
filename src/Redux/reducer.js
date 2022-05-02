import { Login, Logout } from "./actions";

const init = {isLoggedIn:false};

export const reducer = (store = init, { type}) => {
  switch (type) {
    case Login:return {...store,isLoggedIn:true}
    case Logout:return {...store,isLoggedIn:false}
    default: return store;
  }
};
