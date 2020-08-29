
import axios from "axios";

const base = "https://instant-back.herokuapp.com/instant/records/";
const user = "DefaultUser001"

const apiSimple = axios.create({
    baseURL: base,
});

export async function getRecordsApi(page)  {
    const route = user+"/"+page
    const response = await apiSimple.get(route);
    
    return response.data
}
export async function deleteRecordApi(id)  {
    const response = await apiSimple.delete(id);
    console.log(response.data)
    return response.data
}

