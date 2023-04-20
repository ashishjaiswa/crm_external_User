import React from 'react'
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function TopStutas(props) {
  return (
    <div >
        <div style={{display:'flex',alignItems:'center',}}>
            <Avatar sx={{ width: 40, height: 40 }} style={{marginRight:'1vw'}} src={props.ProfileUrl}/>
        <div style={{color:"black"}}>{props.userName}</div>     
        <ArrowDropDownIcon sx={{color:'black'}}/>
        </div>
        </div>
  )
}

export default TopStutas