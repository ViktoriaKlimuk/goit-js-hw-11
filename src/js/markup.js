export function markupCard(params) {
    return params
    .map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes ,
            views ,
            comments ,
            downloads 
        }) => `
        <div class="photo-card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" width="250px"/>
                <div class="info">
                  <p class="info-item">
                    <b>Likes</b><br>
                    <b>${likes}</b>
                  </p>
                  <p class="info-item">
                    <b>Views</b><br>
                    <b>${views}</b>
                  </p>
                  <p class="info-item">
                    <b>Comments</b><br>
                    <b>${comments}</b>
                  </p>
                  <p class="info-item">
                    <b>Downloads</b><br>
                    <b>${downloads}</b>
                  </p>
                </div>
            </a>
       </div>
        `
    ).join("");
}