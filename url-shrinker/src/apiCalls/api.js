import axios from 'axios';

const BASE_URL = 'https://url-shrinker-mern-myil.herokuapp.com/urlshortner';

export const visitUrl = (shortUrl) => {
	return axios.get(`${BASE_URL}/${shortUrl}`).then((res) => res.data).catch((error) => error.response.data);
};

export const addUrl = (originalUrl) => {
	return axios
		.post(
			`${BASE_URL}/api/url/shorten`,
			{ originalUrl },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		.then((res) => res.data)
		.catch((error) => error.response.data);
};

export const getUrl = () => {
	return axios.get(`${BASE_URL}/api/url`).then((res) => res.data).catch((error) => error.response.data);
};
