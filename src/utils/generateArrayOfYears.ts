export function generateArrayOfYears(from: number): number[] {
	let years: number[] = []
	let to = new Date().getFullYear()

	for (var i = to; i >= from; i--) {
		years.push(i)
	}

	return years
}
