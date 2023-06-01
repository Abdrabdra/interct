export default function numberWithSpaces(x?: number) {
	return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
