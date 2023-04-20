import React from 'react'

export default function NavButton(props) {
  return (
    <div style={{
      display:'flex',
      marginTop:'4vh',
      
      
      }}>
      <div style={{marginRight:'5px',}}>{props.iconName}</div>
        <div>{props.btnName}</div>
    </div>
  )
}
