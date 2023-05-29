import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState({
      name: '',
      isLoggedIn: false,
      accessToken: '',
      roles: '',
      uid: ''
  })
  
  if (currentUser.isLoggedIn){
      localStorage.setItem('stayLoggedIn', 'true')
      localStorage.setItem('userName', currentUser.name)
      localStorage.setItem('accessToken', currentUser.accessToken)
      localStorage.setItem('roles', currentUser.roles)
      localStorage.setItem('uid', currentUser.uid)
  }

  useEffect(() => {
      const islogin = localStorage.getItem("stayLoggedIn") === "true"
      const username = localStorage.getItem("userName")
      const accessToken = localStorage.getItem("accessToken")
      const roles = localStorage.getItem("roles")
      const uid = localStorage.getItem("uid")
      if (islogin){
          setCurrentUser({
              name: username,
              isLoggedIn: islogin,
              accessToken,
              roles, 
              uid
          })
      }

  }, [])
    

  return (
      <UserContext.Provider value={[{currentUser, setCurrentUser}]}>
          {children}
      </UserContext.Provider>
  )
}