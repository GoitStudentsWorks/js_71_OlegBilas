import Notiflix from 'notiflix';

function alertSuccess() {
  Notiflix.Notify.success('We`ve found what you were looking for!');
}

function alertEmptyForm() {
  Notiflix.Notify.failure('Enter your search query, please.');
}

function alertSearchFailure() {
  Notiflix.Notify.failure(
    'Search result not successful. Enter the correct movie name.'
  );
}

function alertSearchModalFailure() {
  Notiflix.Notify.failure('Search result about this film is not successful');
}

function alertEndOfCollection() {
  Notiflix.Notify.failure("We've reached the end of your collection!");
}

export {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
  alertSearchModalFailure,
  alertEndOfCollection,
};
