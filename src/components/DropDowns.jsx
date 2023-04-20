import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TopStutas from './TopStutas';

export default function DropDowns() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant='text' {...bindTrigger(popupState)}>
          <TopStutas ProfileUrl={"https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"} userName={"ashish jaiswal"} />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}