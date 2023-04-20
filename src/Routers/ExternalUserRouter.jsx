import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Drawers from '../components/Drawers'
import Login from '../screens/Login'
import DashboardScreen from '../screens/DashboardScreen'
import StudentScreen from '../screens/StudentScreen'
import GroupsScreen from '../screens/GroupsScreen'
import Documents from '../screens/Documents'
import AnnouncementScreen from '../screens/AnnouncementScreen'
import DemoScreen from '../screens/DemoScreen'
import TaskScreen from '../screens/TaskScreen'
import ReportScreen from '../screens/ReportScreen'
import StageScreen from '../screens/StageScreen'
import StaffScreen from '../screens/StaffScreen'

function ExternalUserRouter() {
  return (
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Drawers />} >
    DASHBOARD', '', 'STUDENTS', '', '', '', '', '', '', 'STAGE', 'STAFF'
    <Route path= '' element={<DashboardScreen/>}/>
    <Route path= 'DATA SOURCE' element={<DashboardScreen/>}/>      
    <Route path= 'STUDENTS' element={<StudentScreen/>}/>
    <Route path= 'GROUPS' element={<GroupsScreen/>}/>
    <Route path= 'DOCUMENTS' element={<Documents/>}/>
    <Route path= 'ANNOUNCEMENTS' element={<AnnouncementScreen/>}/>
    <Route path= 'DEMO' element={<DemoScreen/>}/>
    <Route path= 'TASK' element={<TaskScreen/>}/>
    <Route path= 'REPORTS' element={<ReportScreen/>}/>
    <Route path= 'STAGE' element={<StageScreen/>}/>
    <Route path= 'STAFF' element={<StaffScreen/>}/>
    
    </Route>
</Routes>
  )
}

export default ExternalUserRouter