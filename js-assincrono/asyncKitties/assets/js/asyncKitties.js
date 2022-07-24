const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const btt = document.querySelector("#change-kitty");

const getCats = async () => {
	const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e.message));

	return data.webpurl;
	/* OR
		try{
			const data = await fetch(BASE_URL);
			const json = await data.json();

			return json.webpurl;
		} catch(e){
			console.log(e.message);
		}
	*/
};

const loadImg = async () => {
	const catImg = document.querySelector("#kitty");
	catImg.src = await getCats();
}

btt.addEventListener("click", loadImg);

loadImg();