import API from './API';
import FormData from 'form-data';


export const postImage = async (data) => {
    return (await API.post('/depose/addimage', data));
}