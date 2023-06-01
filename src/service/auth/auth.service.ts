import { AxiosResponse } from "axios"
import { ILogin, ILoginResponse } from "../../types/ILogin"
import { IRegistration } from "../../types/IRegistration"

import { $api, DEV_API } from "../../api"

export class AuthService {
	static async login(creds: ILogin): Promise<AxiosResponse<string>> {
		return $api.post<string>(`auth/login`, creds)
	}

	static async registration(
		creds: IRegistration
	): Promise<AxiosResponse<string>> {
		return $api.post<string>(`auth/registration`, creds)
	}

	static async refresh(): Promise<AxiosResponse<ILoginResponse>> {
		return $api.get<ILoginResponse>(`auth/refresh`)
	}

	static async logout(): Promise<AxiosResponse<ILoginResponse>> {
		return $api.get(`auth/logout`)
	}

	// static async logout(): Promise<AxiosResponse<ILoginResponse>> {
	//   return axios.get(`${DEV_API}auth/logout`, { withCredentials: true });
	// }
}
