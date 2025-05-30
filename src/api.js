import axios from 'axios';

const BASE_URL = 'http://localhost:9090/shorten';  // use your Spring Boot port + prefix

export function shortenUrl(longUrl) {
  return axios
    .post(`${BASE_URL}/shorten`, { longUrl })
    .then(res => res.data);
}