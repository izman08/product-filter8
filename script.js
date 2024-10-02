
const products = document.querySelectorAll('.product');
const brandFilters = document.querySelectorAll('.brand-filter');
const typeFilters = document.querySelectorAll('.type-filter');
const priceFilters = document.querySelectorAll('.price-filter');
const clearFiltersBtn = document.getElementById('clearFilters');


function filterProducts() {
    const selectedBrands = Array.from(brandFilters).filter(input => input.checked).map(input => input.value);
    const selectedTypes = Array.from(typeFilters).filter(input => input.checked).map(input => input.value);
    const selectedPrices = Array.from(priceFilters).filter(input => input.checked).map(input => input.value);

    products.forEach(product => {
        const brand = product.getAttribute('data-brand');
        const type = product.getAttribute('data-type');
        const price = product.getAttribute('data-price');

        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(brand);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(type);
        const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(price);

        if (brandMatch && typeMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Event listeners for each filter
brandFilters.forEach(filter => filter.addEventListener('change', filterProducts));
typeFilters.forEach(filter => filter.addEventListener('change', filterProducts));
priceFilters.forEach(filter => filter.addEventListener('change', filterProducts));

// Clear all filters
clearFiltersBtn.addEventListener('click', () => {
    brandFilters.forEach(filter => filter.checked = false);
    typeFilters.forEach(filter => filter.checked = false);
    priceFilters.forEach(filter => filter.checked = false);
    filterProducts();  // Reset the products after clearing filters
});

// Initialize product display
filterProducts();
