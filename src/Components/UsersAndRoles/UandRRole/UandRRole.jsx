import React from 'react'
import { useState } from 'react';
import Permission from './Permission/Permission';
import './UandRRole.css'

const UandRRole = ({UserGroup, Users, Permissions, PermissionList, Editable}) => {
  const [stylePath, setStylePath] = useState("https://cdn.syncfusion.com/ej2/20.1.58/ej2-base/styles/material.css");

  const PermissionsComponent = PermissionList.map((ipermission,index) =>
    <Permission Access = {Permissions[index]} Permission = {ipermission} Editable = {Editable}/>
    /*(Permissions[index] && 
    <div className='RoleGranted'>
      <span class = "e-icons e-check"></span> 
      <ul >{Permission}</ul> 
    </div>
    ) || 
    ( <div className='RoleDenied'>
      <span class = "e-icons e-error-treeview"></span> 
      <ul >{Permission}</ul>
    </div>)*/
  );
  const UserComponent = Users.map((User,index)=>
    <ul style={{display: 'flex'}}>
        <span class = "e-icons e-chevron-right"></span>
        <ul>{User}</ul>        
    </ul>)

  const AddUser = (Editable &&  
    <ul style={{display: 'flex'}} >
      <span class = "e-icons e-plus"></span>
      <ul>Add User</ul>        
    </ul>) 
  || <></>

  return (

    <>
      <div className='OuterDiv'>
        <div className='RoleNameDiv'>
          <h1>{UserGroup}</h1>
          <span class = "e-icons e-people" ></span>
        </div>
        <div className='RoleUserDiv'>
          <ul>{UserComponent}</ul>    
          <ul>{AddUser}</ul>    
        </div>
        
        <ul className='RolePermissions'>{PermissionsComponent}</ul>
      </div>
    </>
  )
}

export default UandRRole
/*         
 <ul style={{display: 'flex'}} >
  <span class = "e-icons e-plus"></span>
  <ul>Add User</ul>        
</ul>
*/