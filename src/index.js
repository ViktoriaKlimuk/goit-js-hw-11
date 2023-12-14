const body = document.querySelector("body");
const form = document.querySelector("form");

//
import { fetchHints } from "./js/pixabay";
import{markupCard} from "./js/markup";
import {success, warning, info, error, loading, reLoading} from "./js/notiflix";


const btnLoad = document.createElement("button");
btnLoad.classList.add("loading");
btnLoad.type = "button";
gallery.append(btnLoad)

let gallery = document.querySelector(".gallery")

let page = 1;
let searchQuery ="";
let maxPages;

btnLoad.style.display = 'none';

form.addEventListener("submit", handleSub);
btnLoad.addEventListener('click', handleClick);

async function handleSub(event) {
    event.preventDefault();

    gallery.innerHTML ='';
    page = 1;

    searchQuery = event.currentTarget.elements.searchQuery.value.trim();
    loading();
    
    try {
        const {hits, totalHits} = await fetchHints(searchQuery, page);
        reLoading();

        maxPages = Math.ceil (totalHits / 40);

        if (searchQuery === '' || totalHits ===0) {
            btnLoad.style.display = 'none';
            return warning()
        }

        btnLoad.style.display ="block";
        success(totalHits);

        gallery.insertAdjacentHTML('beforeend', markupCard(hits));

        if (page >= maxPages) {
            btnLoad.style.display ="none";
            info()
        }
    } catch (error) {
        error(error.message)
    }
    
}


async function handleClick(event) {
    event.preventDefault();
    page+=1;
    loading();
    try {
        const {hits} = await fetchHints(searchQuery, page);
        reLoading();
        if (page >= maxPages) {
            btnLoad.style.display ='none';
            info()
        }
        gallery.insertAdjacentHTML('beforeend', markupCard(hits))
    } catch (error) {
        error(error.message)
    }
}


