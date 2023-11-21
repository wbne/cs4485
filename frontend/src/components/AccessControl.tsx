
export default function AccessControl() {
	let sessionValue = Number(localStorage.getItem("lastLoggedIn"));
	let nanoseconds = new Date();
	let time = Math.ceil(nanoseconds.getTime() / 1000)
	if(sessionValue < time) {
		localStorage.removeItem("lastLoggedIn");
		const currentURL = "" + window.location.origin;
		window.location.assign(currentURL);
	}
	return (<></>);
}
