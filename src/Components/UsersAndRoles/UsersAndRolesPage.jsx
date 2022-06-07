import React from 'react'
import UandRRole from './UandRRole/UandRRole'
import { GridComponent, GridLine } from '@syncfusion/ej2-react-grids'
import './UsersAndRolesPage.css'
const UsersAndRolesPage = () => {
  //Sample Data
  const permissionlist = [
    "Database Management",
    "System Configuration",
    "Approve Dosimeter Lots",
    "Approve/Modify Users Privileges",
    "Define New Role",
    "Manage Picklists",
    "Approve Calibration Curves / Apply Correction Factors (CF)",
    "Read Dosimeters",
    "Complete Post-irradiation Time Report ",
    "Approve Reports",
    "View/Print Reports",
    "Input OQ and PQ Grids",
    "Complete t-test Analyses",
    "Edit Dosimetry Reports",
    "Perform Simple Reads",
    "Manage Picklists",
    "Add/Remove Dosimeter Lots",
    "Perform Self-test and Filter Test",
    "Data Mining",
    "Equipment Log - Add or Edit Equipment"
  ]
  const Roles = ["Corp IT", "Dosimetry Services (DS)"," Radiation Technical Services (RTS)","Corporate QA","QAM","General Manager (GM)", "Senior Reader", "Dosimeter Reader" ]
  const CorpIT = [1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0]
  const DS = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  const RTS = [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  const CorpQA = [0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1]
  const QAM = [0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1]
  const GM = [0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1]
  const SeniorReader = [0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1]
  const DosimeterReader = [0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1]
  const RolePermissions = [CorpIT,DS,RTS,CorpQA,QAM,GM,SeniorReader,DosimeterReader]

  const UserList = ["John Smith", "Jane Doe", "Stephen Curry", "Jayson Tatum", "Kyle Lowry", "Pascal Siakam", "Scottie Barnes", "Fred Vanvleet"]
  //End of Sample data
  const UsersandRoles = Roles.map((Role,index)=>
  <UandRRole UserGroup={Role} Users = {UserList[index]} Permissions = {RolePermissions[index]} PermissionList = {permissionlist} className = 'RoleItem'/>
  )
  return (
    <div className='UAndRDiv'>
      <ul className='PageHeader'>
        <h1 style={{width: '33%'}}>Group</h1>
        <h1 style={{width: '20%'}}>Users</h1>
        <h1 style={{width: '35%'}}>Permissions</h1>
      </ul>
      <ul>{UsersandRoles}</ul>
      <button className='AddRoleButton'>Add Role</button>
    </div>
  )
}

export default UsersAndRolesPage