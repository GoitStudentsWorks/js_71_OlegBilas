
import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';


const galleryList = document.querySelector('.list');

async function makeLayout() {
  const galleryItems = await fetchFilms();
  console.log(galleryItems.results);
  renderCollection(galleryItems.results);
}


makeLayout()



// далі код Євгена

export function renderCollection(collection) {
  const films = collection.results
    .map(film => {
      return `<li class="film-card" data-id="${film.id}">
      <a class="film-link" href="${film.poster_path}">
        <img src="${film.poster_path}" alt="${film.title}" loading="lazy" />
        <div class="film-meta">
          <span class="film-name">${film.title}</span>
          <div class="film-info">
            <span class="film-ganre">${film.genres}</span>
            <span class="film-year">${film.year}</span>
          </div>
        </div>
      </a>
      </li>`;
    })
    .join('');
  // galleryList.insertAdjacentHTML('beforeend', films);
  galleryList.innerHTML = films;
}


galleryList.addEventListener('click', async event => {

  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const filmCard = event.target.closest('.film-card');
    if (!filmCard) return;
    const filmId = filmCard.dataset.id;
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails);
  }
});
