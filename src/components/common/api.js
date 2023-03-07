import axios from 'axios';

export async function fetchData(data, setError) {

    const url = process.env.REACT_APP_URL;
    if (data == null) {
        try {
            const responce = await axios.get(url);
            setError("");
            return responce.data;
        } catch (error) {
            setError("Error! Maybe Limit Exceeded");
            console.log(error);
            return error;
        }
    }
}