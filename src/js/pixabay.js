import axios from "axios";

export async function fetchHints(query="", page="") {
    const apiUrl = "https://pixabay.com/api/?";
    const params = new URLSearchParams({
        key: "41264181-83fac7734f961e185fe372492",
        q: query,
        image_type: "photo",
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 40,
        
    });
    return await axios.get(`${apiUrl}&${params}`).then(response => {return response.data});
}