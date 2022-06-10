import React, { useState } from 'react'

const Permission = ({Access, Permission, Editable, PermissionsState, setPermissionsState, index}) => {
    const [PState, setPState] = useState(PermissionsState)
    const togglePermission = async() => {
      if(Editable){
        let newState = PState
        if(newState[index]){
          newState[index] = 0
          setPermissionsState(newState)
          setPState([...newState])
        }else{
          newState[index] = 1
          setPermissionsState(newState)
          setPState([...newState])
        }
      }
    }
    const PermissionComponentEditable = (PState[index] &&
        <div className='RoleGranted'>
          <input type= "checkbox" checked onClick={() => {togglePermission()}}></input> 
          <ul >{Permission}</ul> 
        </div>
        ) 
        || 
        ( <div className='RoleDenied'>
          <input type= "checkbox" onClick={() => {togglePermission()}}></input>  
          <ul >{Permission}</ul>
        </div>)
    const PermissionComponentNotEditable = (PState[index] &&
        <div className='RoleGranted'>
          <span class = "e-icons e-check"></span> 
          <ul >{Permission}</ul> 
        </div>
        ) 
        || 
        ( <div className='RoleDenied'>
          <span class = "e-icons e-error-treeview"></span> 
          <ul >{Permission}</ul>
        </div>)
    const PermissionComponent = (Editable && PermissionComponentEditable) || PermissionComponentNotEditable
  return (
      <ul>{PermissionComponent}</ul>
  )
}

export default Permission