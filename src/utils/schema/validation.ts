import * as yup from "yup"

export const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginSchema = yup.object().shape({
	phone: yup
		.string()
		.matches(phoneRegExp, "Не правильный формат номера телефона"),
	password: yup.string().required("Введите пароль")
})

export const RegistrationSchema = yup.object().shape({
	regPhone: yup
		.string()
		.required("Введите номер телефона")
		.matches(phoneRegExp, "Не правильный формат номера телефона"),
	regPassword: yup.string().required("Введите пароль"),
	regName: yup.string().required("Введите имя")
})
