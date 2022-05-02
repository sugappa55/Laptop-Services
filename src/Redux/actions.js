// action types
export const Login="Login"
export const Logout="Logout"
// Action Creators
export const login=(payload)=>{
    return {type:Login,payload}
}
export const logout=()=>{
    return {type:Logout}
}
