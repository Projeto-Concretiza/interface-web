import axios from 'axios';

const baseURL = "<your url>";

const api = {
    get = async (url) => {
        axios.get(baseURL + url)
            .then((response) => {
                return await response;
            })
            .catch((e) => {
                console.log(e);
            })
    },
    post = async (url,content) => {
        axios.post(url,content)
            .then((response) => {
                return await response;
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export default api;