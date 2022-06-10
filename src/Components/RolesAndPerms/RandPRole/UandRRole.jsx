import React from 'react'
import { useState } from 'react';
import Permission from './Permission/Permission';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './UandRRole.css'

const UandRRole = ({UserGroup, Users, Permissions, PermissionList, Editable, addUser, index}) => {
  const [PermissionsState, setPermissionsState] = useState(Permissions)
  const [newUser, setNewUser] = useState("")

  const UserComponent = Users.map((User,index)=>
    <ul style={{display: 'flex'}}>
        <span class = "e-icons e-chevron-right"></span>
        <ul>{User}</ul>        
    </ul>)

  const AddUser = (Editable &&  
    <ul style={{display: 'flex'}} >
      <span class = "e-icons e-plus" onClick={console.log(newUser)}></span>
      <input className="e-input" type="text" placeholder="Enter Name" onChange={event => setNewUser(event.target.value)}/>
    </ul>) 
  || <></>

  const toggleAll = async() => {
    if(Editable){
      if(PermissionsState.includes(0)){
        setPermissionsState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
      }else{
        setPermissionsState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
      }
    }
    
  }
  const SelectAllButton = (Editable && <button onClick={() => toggleAll()} className = "selectAllButton">Select all</button>) || <></>


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
        <ul className='RolePermissions'>
          <ul className='SelectAllButton'>{SelectAllButton}</ul>
          <div style={{height:'10px'}}></div>
          {PermissionList.map((ipermission,index) =><Permission 
                                                      key = {PermissionsState[index]+(index*2)}
                                                      Access = {PermissionsState[index]} 
                                                      Permission = {ipermission} 
                                                      Editable = {Editable} 
                                                      PermissionsState = {PermissionsState} 
                                                      setPermissionsState = {setPermissionsState}
                                                      index = {index}/>)}
        </ul>
      </div>
    </>
  )
}

export default UandRRole

