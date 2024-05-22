document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const showFavoriteBtn = document.getElementById('show-favorites-btn');
    const ShowtoyBtn = document.getElementById('show-toy');
    const ShowotherBtn = document.getElementById('show-other');
    let ShowFavorite = false;
    let Showtoy = false;
    let Showother = false;

    showFavoriteBtn.addEventListener('click', () => {
        ShowFavorite = !ShowFavorite;

        if(Showtoy || Showother ){
            Showtoy = false;
            Showother = false;
            updateButtonColor();
        }

        if (ShowFavorite) {
            showFavoriteBtn.textContent = "Показать все";

            products.forEach(product => {
                let isFavorite = JSON.parse(product.getAttribute('data-favorite'));
                if (!isFavorite) {
                    product.style.display = 'none';
                }
            });
        } else {
            showFavoriteBtn.textContent = "Показать избранное";

            products.forEach(product => {
                product.style.display = 'block';
            });
        }
    });

    ShowtoyBtn.addEventListener('click', () => {
        Showtoy = !Showtoy;
            if (Showtoy) {
                products.forEach(product => {
                        let Istoy = JSON.parse(product.getAttribute('data-toy'));
                        if (!Istoy || (ShowFavorite && !JSON.parse(product.getAttribute('data-favorite'))) ) {
               product.style.display = 'none';
           }
       });
   } else {
       products.forEach(product => {
           if (!ShowFavorite || JSON.parse(product.getAttribute('data-favorite'))) {
               product.style.display = 'block';
           }
       });
   }
   updateButtonColor();
});


    ShowotherBtn.addEventListener('click', () => {
        Showother = !Showother;

            if (Showother) {
                products.forEach(product => {
                    let isOther = JSON.parse(product.getAttribute('data-other'));
                    if (!isOther || (ShowFavorite && !JSON.parse(product.getAttribute('data-favorite')))) {
                product.style.display = 'none';
            }
        });
    } else {
        products.forEach(product => {
            if (!ShowFavorite || JSON.parse(product.getAttribute('data-favorite'))) {
                product.style.display = 'block';
            }
        });
    }

    updateButtonColor();
});


    products.forEach(product => {
        const favoriteBtn = product.querySelector('.favorite-btn');
        let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

        favoriteBtn.addEventListener('click', () => {
            if (isFavorite) {
                product.setAttribute('data-favorite', false);
                favoriteBtn.classList.remove('favorite');
                isFavorite = false;
            } else {
                product.setAttribute('data-favorite', true);
                favoriteBtn.classList.add('favorite');
                isFavorite = true;
            }
        });
    });

    function updateButtonColor() {
        if (Showtoy) {
            ShowtoyBtn.style.color = 'red';
        } else {
            ShowtoyBtn.style.color = 'black';
        }
        if (Showother) {
            ShowotherBtn.style.color = 'red';
        } else {
            ShowotherBtn.style.color = 'black';
        }
    }
});
