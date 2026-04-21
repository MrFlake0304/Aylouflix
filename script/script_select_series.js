const select = document.getElementById('Select')

    select.addEventListener('change', (event) => {
    document.querySelectorAll('.hidden_categorie').forEach(AllCategories => AllCategories.style.display = 'none');

    const cible = document.getElementById('hidden_categorie_' + event.target.value);
        if (cible) {
            cible.style.display = 'block';
        }
});

