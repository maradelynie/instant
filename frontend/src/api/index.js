
import axios from "axios";

const base = "http://localhost:3001/instant/records/";
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
export async function editRecordApi(data,id)  {
    const fullData = data
    fullData.user = user
    const response = await api.put(id,fullData);

    return response.data
}

export async function postRecordApi(data)  {
    const fullData = data
    fullData.user = user
    const response = await api.post(null,fullData);
    
    return response.data
}

