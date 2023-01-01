'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertising = document.querySelectorAll('.promo__adv img');
    const genreFilm = document.querySelector('.promo__genre');
    const promoBg = document.querySelector('.promo__bg');
    const filmsList = document.querySelector('.promo__interactive-list');

    const deleteAdv = (adv) => {
        adv.forEach(item => {
            item.remove();
        });
    };
    

    const makeChangesPromoImageAndText = (text, image) => {
        text.textContent = 'Драма';
        image.style.background = 'url("../img/bg.jpg") center center/cover no-repeat';
    }; 

    function sortArr(arr) {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        

        films.movies.forEach((film, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    const addForm = document.querySelector('form.add');
    const addInput = document.querySelector('.adding__input');
    const checkbox = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newFilm = addInput.value.toUpperCase();
        const favourite = checkbox.checked;
        
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            } 
            
            if(favourite) {
                console.log('Любимый Фильм');
            }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB, filmsList);
        e.target.reset();
        }
    });

    makeChangesPromoImageAndText(genreFilm, promoBg);
    deleteAdv(advertising);
    sortArr(movieDB.movies);
    createMovieList(movieDB, filmsList);
    
});
