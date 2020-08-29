
import axios from "axios";

const base = "https://instant-back.herokuapp.com/instant/records/";
const user = "DefaultUser001"

const apiSimple = axios.create({
    baseURL: base,
});

export async function getRecords(page)  {
    const route = user+"/"+page
    const response = await apiSimple.get(route);
    
    return response.data
}
