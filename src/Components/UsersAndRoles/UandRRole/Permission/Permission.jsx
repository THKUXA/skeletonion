import React, { useState } from 'react'

const Permission = ({Access, Permission, Editable}) => {
    const [Allowed, setAllowed] = useState(Access)
    const togglePermission = async() => {
        if(Editable){

            if(Allowed){
                setAllowed(0)
            }else{
                setAllowed(1)
            }
        }
      }
    const PermissionComponentEditable = (Allowed &&
        <div className='RoleGranted'>
          <input type= "checkbox" checked onClick={() => {togglePermission()}}></input> 
          <ul >{Permission}</ul> 
        </div>
        ) || 
        ( <div className='RoleDenied'>
          <input type= "checkbox" onClick={() => {togglePermission()}}></input>  
          <ul >{Permission}</ul>
        </div>)
    const PermissionComponentNotEditable = (Allowed &&
        <div className='RoleGranted'>
          <span class = "e-icons e-check"></span> 
          <ul >{Permission}</ul> 
        </div>
        ) || 
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