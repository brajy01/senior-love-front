const fetchAPI = async (path, options) => {
	const baseURL = "http://localhost:4000"
	const url = `${baseURL}${path}`;
	try{
		const response = await fetch(url, options);
		const data = await response.json();

		if(!response.ok){
			console.log(data.error, response.status)
			return null;
		}

		return data;
	} catch (error){
		console.log(error)
		return null;
	}
}

export default fetchAPI;