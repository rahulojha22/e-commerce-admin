import React, { useEffect, useState } from 'react';
import GeneralTable from '../components/GeneralTable';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setData } from '../redux/slices/addDataSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { UserServices } from '../services';

const ProductList = () => {
  const { GetSidebarList } = UserServices;   
  const navigate = useNavigate();
  const [sidebarList, setSidebarList] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'menu', headerName: 'Sidebar Menu', width: 130 },
    { field: 'menuUrl', headerName: 'Navigation URL', width: 130 },
    { field: 'menuDescription', headerName: 'Description', width: 230 }
  ]

  useEffect(()=>{
    let postData = {};
    postData.condition = [];
    postData.condition.push({'$match': {}});    
    GetSidebarList(postData).then(res=>{         
      if(res.success){
        let data = res.data;        
        data.forEach((val, i)=>val.id=(i+1));        
        setSidebarList(data);
      }      
    }).catch(error=>{
      
    })
  }, []);

  const addProductPage = ()=>{    
    navigate('/user/product/add');
  }

  return (
    <div>
      <Grid container spacing={2} pb={2}>
        <Grid item xs={8}>
          <h3>Sidebar Menus</h3>
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button variant="contained" size="small" onClick={addProductPage}><AddCircleOutlineIcon/> &nbsp;Add</Button>
          </Stack>            
        </Grid>          
      </Grid>        
      {sidebarList.length && <GeneralTable headers={columns} data={sidebarList}/>}
    </div>
  )
}

export default ProductList
