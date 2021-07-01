import axios from 'axios'

const KEY = 'AIzaSyCjF14KIXRZmWo7j_vt4rvNVYm--TX0zMw';


export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})