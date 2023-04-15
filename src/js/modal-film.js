import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
<div class="backdrop js-backdrop">
    <div class="modal">
        ​
        <button type="button" class="btn-close" id="btn-close">
            <svg class="form__close-icon" width="30px" height="30px">
                <use href="/images/sprite.svg#icon-close"></use>
            </svg> </button>
        <div id="modal_form">
            ​
            <form class="form">
                <div class="form__film-card">
                    <div class="form__film-img">
                        <img class="form-img" src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
                            alt="Avatar: The Way of Water">
                    </div>
                </div>
                <div class="form__info">
                    <h2 class="form__title">Avatar: The Way of Water</h2>
                    <ul class="form__info-list">
                        <li class="form__info-item">
                            <p class="form__info-name">Vote / Votes</p>
                            <p class="form__info-details"> <span class="film__rating">7.7
                                    ​
                                </span>/<span class="film__voice">6970</span></p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Popularity</p>
                            <p class="form__info-details">4810.649</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Original Title</p>
                            <p class="form__info-details details-title">Avatar: The Way of Water</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Genre</p>
                            <p class="form__info-details">Science Fiction, Adventure, Action</p>
                        </li>
                    </ul>
                    <div class="form__about">
                        <h3 class="form__about-name">About</h3>
                        <p class="form__about-details">Four of the West’s most infamous outlaws assemble to steal a huge
                            stash of gold from the most corrupt settlement of the gold rush towns. But not all goes to
                            plan one is killed and the other three escapes with bags of gold hide out in the abandoned
                            gold mine where they happen across another gang of three – who themselves were planning to
                            hit the very same bank! As tensions rise, things go from bad to worse as they realise the
                            bags of gold are filled with lead... they’ve been double crossed – but by who and how?</p>
                    </div>
                    <div class="form__btn-list">
                        <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to
                            watched</button>
                        <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to
                            queue</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

`, {
    onShow: (instance) => {
        instance.element().querySelector('#btn-close').onclick = instance.close
    }
})

instance.show()

// const watchedBtn = document.querySelector('#watched');
// const queueBtn = document.querySelector('#queue');

// watchedBtn.addEventListener('click', () => {
// //  Додавання id до списку
// });

// queueBtn.addEventListener('click', () => {
// //  Додавання id до списку
// });
        // <a>Close</a>
// {/* <div class="modal">
    
// </div> */}