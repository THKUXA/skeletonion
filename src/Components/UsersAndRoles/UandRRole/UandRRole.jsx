import React from 'react'
import { useState } from 'react';
import './UandRRole.css'

const UandRRole = ({UserGroup, Users, Permissions, PermissionList}) => {
  const [stylePath, setStylePath] = useState("https://cdn.syncfusion.com/ej2/20.1.58/ej2-base/styles/material.css");
  const PermissionsComponent = PermissionList.map((Permission,index) =>
  (Permissions[index] && 
    <div className='RoleGranted'>
      <span class = "e-icons e-check"></span> 
      <ul >{Permission}</ul> 
    </div>
    ) || 
    ( <div className='RoleDenied'>
      <span class = "e-icons e-close"></span> 
      <ul >{Permission}</ul>
    </div>)
  );

  return (

    <>
      <div className='OuterDiv'>
        <div className='RoleNameDiv'>
          <h1>{UserGroup}</h1>
          <span class = "e-icons e-people" ></span>
        </div>
        <div className='RoleUserDiv'>
          <ul style={{display: 'flex'}}>
              <span class = "e-icons e-close"></span>
              <ul>{Users}</ul>        
          </ul>
          <ul style={{display: 'flex'}} >
              <span class = "e-icons e-plus"></span>
              <ul>Add User</ul>        
          </ul>
        </div>
        <ul className='RolePermissions'>{PermissionsComponent}</ul>
      </div>
    </>
  )
}

export default UandRRole