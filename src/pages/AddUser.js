import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { UserServices } from '../services';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {
  menu: '',
  menuDescription: '',
  menuUrl: ''
}

const AddUser = () => {
  const navigate = useNavigate();
  const { CreateSidebar } = UserServices;
  const [open, setOpen] = useState(false);
  const [addForm, setAddForm] = useState(initialState);

  const backToList = ()=>{
    navigate('/user/user/list');
  }

  const handleDialog = (value) => {
    setOpen(value);
  };

  const updateForm = (field, value) => {
    setAddForm(prevState => ({
      ...prevState,
      [field]: value
    }));    
  }

  const addSidebar = ()=>{    
    CreateSidebar(addForm).then(res=>{        
      if(res.success){        
        handleDialog(false);
        navigate('/user/user/list');        
      }      
    }).catch(error=>{
      handleDialog(false);
    });    
  }

  const resetForm = ()=>{
    setAddForm(initialState);    
  }  

  return (
    <div>
      <Grid container spacing={2} pb={2}>
        <Grid item xs={8}>
          <h3>Add Sidebar Menu</h3>
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >            
            <Button className='list-btn-stl' variant="contained" size="small" onClick={backToList}><ArrowBackIcon/> List</Button>
          </Stack>            
        </Grid>          
      </Grid>
      <form>
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-4'>
                        <div className="mb-3">
                          <label htmlFor="menuSidebarCreate" className="form-label">Menu</label>
                          <input type="text" className="form-control" id="menuSidebarCreate" value={addForm.menu} onChange={(e)=>updateForm('menu', e.target.value)} placeholder=""/>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="mb-3">
                          <label htmlFor="urlSidebarCreate" className="form-label">Navigation URL</label>
                          <input type="text" className="form-control" id="urlSidebarCreate" value={addForm.menuUrl} onChange={(e)=>updateForm('menuUrl', e.target.value)} placeholder=""/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="mb-3">
                          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={addForm.menuDescription} onChange={(e)=>updateForm('menuDescription', e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                <Button className='btn-spacing' variant="contained" color="error" size="small" onClick={resetForm}>Reset</Button>   
                <Button variant="contained" color="success" size="small" onClick={()=>handleDialog(true)}>Submit</Button>
            </div>
        </div>
      </form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=>handleDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Create Sidebar Menu"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please confirm to create this sidebar menu?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleDialog(false)}>Disagree</Button>
          <Button onClick={()=>addSidebar()}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddUser;