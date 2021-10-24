import * as React from 'react';
import { makeStyles, } from '@mui/styles';
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const style = makeStyles({
  list: {
    color: 'black', 
  }
})


const MainCartegories = () => {
  const classes  = style()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
    className={`${classes.list} `}
      sx={{ width: '100%', }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Cartegories
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText className='zenfont' primary="Sent mail" />

        
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText className='zenfont' primary="Drafts" />
      </ListItemButton>
      <ListItemButton className='zenfont' onClick={handleClick}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText className='zenfont' primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default MainCartegories