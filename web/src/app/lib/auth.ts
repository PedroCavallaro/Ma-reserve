import Cookies from  "js-cookie"
import jwtDecode from "jwt-decode"


export interface User{
    sub: string,
    username: string,
    email: string,
    image: string
}

export  function getUser(){
    const token = Cookies.get("token")
  
    // if(!token){
    //    return("Unauthenticaded")
    // }else{
        const user: User = jwtDecode(token!)
        return user
    // }
    

}