import axios from 'axios';

const API_KEY = '55777204-657361ff26fdbc8510979d0fd';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    return axios
        .get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            },
        })
        .then(response => response.data);
}