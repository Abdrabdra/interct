import axios from "axios"

export const DEV_API = "http://164.92.129.220/"
// export const DEV_API = "https://api.avtolike.kz/"
// export const DEV_API = "http://localhost:3000/"
// export const PROD_API = "https://";

export const $api = axios.create({
	baseURL: DEV_API
})

$api.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.authorization = `Bearer ${localStorage.getItem(
			"access_token"
		)}`
		return config
	}
})

export const $image_api = "https://sezin.ams3.digitaloceanspaces.com/"
