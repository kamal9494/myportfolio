import axios from 'axios';

export async function fetchData(data,setError){

    const url = `URL`;
    if(data == null){
        try{
            const responce = await axios.get(url);
            setError("");
            return responce.data;
        }catch (error){
            setError("Error! Maybe Limit Exceeded");
            return error;
        }
    }
}