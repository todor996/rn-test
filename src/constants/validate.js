




const reEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const rePassword = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/ ;
const reUserName = /^[\w\.@]{6,100}$/;

export  function checkEmail(email){
    return reEmail.test(email)
}
export function checkPassword(password){
    return rePassword.test(password)
}
export function checkUserName(userName){
    // return reUserName.test(userName)
    return true
}