
import axios from "axios";

const base = "https://instant-back.herokuapp.com/instant/records/";
const user = "DefaultUser001"

const api = axios.create({
    baseURL: base,
});

export async function getRecordsApi(page)  {
    const route = user+"/"+page
    const response = await api.get(route);
    const data = response.data.records.map(record => {
        record.date = new Date(record.date).toString()    
    return record
})

    return data
}
export async function deleteRecordApi(id)  {
    const response = await api.delete(id);
    return response.data
}
export async function editRecordApi(data)  {
    console.log(data)

    const response = await api.put(data._id,data);
    
    return response.data
}

