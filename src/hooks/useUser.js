// import { useState } from "react";
// import AuthService from "../manageApi/Auth.Service";

// const useUser = ()=> {
// const [dbUser, setDbUser] = useState({});
// const [loading, setLoading] = useState(false);

//     const getUserFromDb = (email) =>{
//         setLoading(true);
//         AuthService.getSpecificUser(email)
//         .then(res => {
//             setDbUser(res);
//             setLoading(false);
//         })
//         .catch(error => {})
//     }

//     return{
//         dbUser,
//         loading,
//         getUserFromDb
//     }
// };

// export default useUser;