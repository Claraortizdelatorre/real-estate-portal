import Axios from "axios";



const propertyListUrl = `${process.env.BASE_API_URL}/properties?`;

export const getPropertyList = queryParams =>
  Axios.get(`${propertyListUrl}${queryParams}`).then(({ data }) => data);

  //lista types
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then(({ data }) => data);


//lista de provincias
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
  Axios.get(provinceListUrl).then(({ data }) => data);