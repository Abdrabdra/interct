export function toMonthName(dateIn: Date) {
	const date = new Date(dateIn)

	return date.toLocaleString('ru-RU', {
		month: 'long'
	})
}