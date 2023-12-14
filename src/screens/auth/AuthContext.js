import React, { createContext, useState } from 'react'


export const ContextAuth = createContext() 
export default function AuthContext({children}) {
      const [userInfo, setuserInfo] = useState({})
      const [userCode, setuserCode] = useState('')
      
    const  AuthData = (userdata) =>{
         setuserInfo(userdata);
    }

    const  verifyCode = (code) =>{
      setuserCode(code);
    }

  return (
    <>
     <ContextAuth.Provider value={{userInfo, AuthData, verifyCode, userCode}}>
        {children}
     </ContextAuth.Provider>
    </>
  )
}
