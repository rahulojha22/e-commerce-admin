import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import UserList from './pages/UserList';
import UserLayout from './layouts/UserLayout';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SidebarList from './pages/SidebarList';
import RoleList from './pages/RoleList';
import StoreList from './pages/StoreList';
import AddElement from './pages/AddElement';
import AddSidebar from './pages/AddSidebar';
import PermissionList from './pages/PermissionList';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import AddStore from './pages/AddStore';
import AddRole from './pages/AddRole';
import AddOrder from './pages/AddOrder';
import AddPermission from './pages/AddPermission';
import AddProduct from './pages/AddProduct';

function App() {  
  return (
    <>    
      <Router>                
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="pub" element={<PublicLayout/>}>
            <Route path="login" element={<Login/>} />
          </Route>
          <Route path="user" element={<UserLayout/>}>
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="user/list" element={<UserList/>} />
            <Route path="sidebar/list" element={<SidebarList/>} />
            <Route path="role/list" element={<RoleList/>} />
            <Route path="store/list" element={<StoreList/>} />
            <Route path="permission/list" element={<PermissionList/>} />
            <Route path="order/list" element={<OrderList/>} />
            <Route path="product/list" element={<ProductList/>} />

            <Route path="user/add" element={<AddElement/>} />
            <Route path="sidebar/add" element={<AddSidebar/>} />
            <Route path="role/add" element={<AddRole/>} />
            <Route path="store/add" element={<AddStore/>} />
            <Route path="permission/add" element={<AddPermission/>} />
            <Route path="order/add" element={<AddOrder/>} />
            <Route path="product/add" element={<AddProduct/>} />

            <Route path="user/edit" element={<AddElement/>} />
            <Route path="sidebar/edit" element={<AddSidebar/>} />
            <Route path="role/edit" element={<AddElement/>} />
            <Route path="store/edit" element={<AddElement/>} />
            <Route path="permission/edit" element={<SidebarList/>} />
            <Route path="order/edit" element={<RoleList/>} />
            <Route path="product/edit" element={<StoreList/>} />
          </Route>
        </Routes>
      </Router>    
    </>
  );
}

export default App;
