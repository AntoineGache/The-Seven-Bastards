import API from './API';


export const postImage = async (data) => {

    return (await API.post('/depose/addimage', data));
}