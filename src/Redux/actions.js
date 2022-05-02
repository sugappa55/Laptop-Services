// action types
export const Login="Login"
export const Logout="Logout"
// Action Creators
export const login=()=>{
    return {type:Login}
}
export const logout=()=>{
    return {type:Logout}
}
