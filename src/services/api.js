import axios from 'axios';

const URL = 'http://maratona-esamc.herokuapp.com';

export const api = axios.create({
    baseURL: URL
});

export const uploadImageAsync = (url, uri, namefile) => {

    const apiUrl = URL + url;

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
    const data = new Date().toISOString();
    const formData = new FormData();

    formData.append('file', {
        uri,
        name: `${namefile}-${data}.${fileType}`,
        type: `image/${fileType}`,
    });

    const options = {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    };

    return fetch(apiUrl, options);
}