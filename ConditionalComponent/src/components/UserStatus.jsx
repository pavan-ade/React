import React from 'react'

const UserStatus = ({isLogged, isAdmin}) => {
  if(isLogged && isAdmin){
    return <h3> Welcome to Admin</h3>
  }else if(isLogged && !isAdmin){
    return  <h3>welcom to User</h3>
  }else{
    return <h3>Please Loggin</h3>
  }
}

export default UserStatus