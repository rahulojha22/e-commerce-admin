import axios from "axios";
import { base_url } from "./BaseUrl";

export const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/data`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const postData = async (data) => {
  try {
    const response = await axios.post(`${base_url}/post`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${base_url}/pub/auth/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${base_url}/pub/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const CreateSidebar = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/sidebar/create`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetSidebarList = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/sidebar/list`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetUserSidebarMenuList = async (data) => {
  try {
    const response = await axios.post(`${base_url}/user/sidebar/user_list`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};