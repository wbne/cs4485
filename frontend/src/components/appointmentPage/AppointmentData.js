export function Appointments() {
	let list = []
	let fullname = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
	let data = localStorage.getItem("appointments");
	let chunks = data.split("$");
	for (let index in chunks) {
		let bits = chunks[index].split(",");
		let appointment = {
			studentName: bits[0],
			tutorName: bits[1],
			topic: bits[2],
			date: bits[3],
			time: bits[4],
			notes: ""
		}
		if(bits.length > 1 && (fullname === bits[0] || fullname === bits[1]))
			list.push(appointment);
	}
	return list;
}
