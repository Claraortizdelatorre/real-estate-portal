import Axios from "axios";

const url = `${process.env.BASE_API_URL}/properties`;

export const saveProperty = newProperty =>
    Axios.post(url, newProperty).then(response => {
        return response.data;
    });

// Para el tipo de operación (alquiler, venta, compartir, vacacional)
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => 
    Axios.get(saleTypeListUrl).then(response => {
        return response.data;
    });

// Para la lista de provincias, obtener 
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvinceList = () =>
    Axios.get(provinceListUrl).then(response => {
        console.log(response.data);
        return response.data;
    });

// Para equipamiento
const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipment = () => 
    Axios.get(equipmentsUrl).then(response => {
        return response.data;
    });