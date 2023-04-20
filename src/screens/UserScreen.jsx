import React, { useState } from 'react'
import SideNavigation from '../components/SideNavigation';
import { Divider } from '@mui/material';
import TopStutas from '../components/TopStutas';
import DataSoure from '../components/DataSoure';
import Drawers from '../components/Drawers';
import StudentScreen from './StudentScreen';
function UserScreen() {
    
    const [opened,setOpened]=useState(false);
    return (
    

        <div style={{ display: 'flex' }}>
            
            <div>

                <Drawers setOpened={setOpened}/>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'column', }}>
                <Divider />
                <div style={{ marginTop: '8vh',wi }}>
                    <StudentScreen  />
                </div>
            </div> */}
        </div>
    )
}

export default UserScreen;