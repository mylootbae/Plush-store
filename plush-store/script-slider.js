document.addEventListener('DOMContentLoaded', function() {
const priceValue = document.getElementById('priceValue');
const priceSlider = document.getElementById('priceSlider');
const products = document.querySelectorAll('.product[data-price]');
let ShowFavorite = false;
let Showtoy = false;
let Showother = false;
document.getElementById('show-favorites-btn').addEventListener('click', function() {
        ShowFavorite = !ShowFavorite;
        updateProducts();
    });

    document.getElementById('show-toy').addEventListener('click', function() {
        Showtoy = !Showtoy;
        updateProducts();
    });

    document.getElementById('show-other').addEventListener('click', function() {
        Showother = !Showother;
        updateProducts();
    });

    priceSlider.addEventListener('input', function() {
        updateProducts();
    });
    
    function updateProducts() {
            products.forEach(product => {
                const productPrice = parseInt(product.getAttribute('data-price'));
                priceValue.textContent = priceSlider.value;

                if (productPrice >= parseInt(priceSlider.value)) {
                    let Istoy = JSON.parse(product.getAttribute('data-toy'));
                    let isOther = JSON.parse(product.getAttribute('data-other'));
                    let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

                    if ((Showtoy && !Istoy) || (Showother && !isOther) || (ShowFavorite && !isFavorite)) {
                        product.style.display = 'none';
                    } else {
                        product.style.display = 'block';
                    }
                } else {
                    product.style.display = 'none';
                }
            });
        }
});
