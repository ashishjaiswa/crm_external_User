import React from 'react'
import NavButton from './NavButton'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AnimationIcon from '@mui/icons-material/Animation';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HailIcon from '@mui/icons-material/Hail';
function SideNavigation() {
    return (
        
        <div style={{ display: 'flex', backgroundColor: "#e4ebe5", width: "13vw", height: "100vh", flexDirection: 'column',paddingLeft:"2vw", }}>
            <div style={{height:'10vh'}}>crm</div>
            <NavButton btnName={'Dashboard'} iconName={<DashboardIcon sx={{fontSize:"20px"}} color='action' />} />
            <NavButton btnName={'DATA SOURCE'} iconName={<StorageIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'STUDENT'} iconName={<PersonIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'GROUPS'} iconName={<GroupsIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'DOCUMENTS'} iconName={<TextSnippetIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'ANNOUNCEMENT'} iconName={<CampaignIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'DEMO'} iconName={<AutoAwesomeMotionIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'TASK'} iconName={<NoteAltIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'REPORTS'} iconName={<AnimationIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'STAGE'} iconName={<SignalCellularAltIcon sx={{fontSize:"20px"}}  color='action'/>} />
            <NavButton btnName={'STAFF'} iconName={<HailIcon sx={{fontSize:"20px"}}  color='action'/>} />
        </div>
        
    )
}

export default SideNavigation