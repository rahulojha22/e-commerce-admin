import React, { useEffect, useState } from 'react';
import {    
  Link
} from "react-router-dom";
import { UserServices } from '../services';

const Sidebar = () => {
  const { GetUserSidebarMenuList } = UserServices;
  const [sidebarList, setSidebarList] = useState([]);

  useEffect(()=>{
    let postData = {};
    postData.condition = [];    
    postData.condition.push({'$match': {}});    
    postData.condition.push({'$project': {_id: 0, menu: 1, menuUrl: 1}})
    GetUserSidebarMenuList(postData).then(res=>{         
      if(res.success){
        let data = res.data;                        
        setSidebarList(data);
        console.log(data);
      }      
    }).catch(error=>{
      
    })
  },[]);

  return (
    <div className='sidebar-section'>
        <div className="card border-0">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {
                sidebarList.length &&
                sidebarList.map((val, i)=> <li className="list-group-item" key={`sidebar${i}`}><Link to={val.menuUrl}>{val.menu}</Link></li>)
              }              
            </ul>            
          </div>
        </div>      
    </div>
  )
}

export default Sidebar
