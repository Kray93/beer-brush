// import { useHistory } from "react-router-dom";



export function checkUser() {
    // const history = useHistory();
    let activeUser = localStorage.getItem("activeUser");
    console.log(activeUser);
    if (activeUser) {
        return true;
        
    } else {
        return false;
    }
}