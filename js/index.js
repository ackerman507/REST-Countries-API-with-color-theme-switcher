const selectElement = document.getElementById("regions");
const txtName = document.getElementById("name");
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        const body = document.body;
        // Verifica la clase actual y alterna entre "light" y "dark"
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
        }
    });
    getRegions();
    drawAllCountries();    
    selectElement.addEventListener('change', filterByRegion);
    txtName.addEventListener("input", drawCountry);

});

const getCountries = async () => {
    const url = "data.json";
    const init = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    };
    const req = await fetch(url, init);
    if (req.ok) {
        return req.json();
    }
}

function draw (filterCountries) {
    const cards_countries = document.getElementById("cards_countries");
    cards_countries.innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < filterCountries.length; i++) {
        const element = filterCountries[i];
        const cardDiv = document.createElement("div");
        cardDiv.className = 'col-md-3 mb-4 px-4';
        cardDiv.innerHTML = '<a href="details.php?alpha3Code=' + element.alpha3Code + '"><div class="card shadow"><img class="card-img-top" src="' + element.flag + '" alt="" style="height:170px;"><div class="card-body"><h5 class="card-title fw-bold">' + element.name + '</h5><p class="card-text mb-0 text-muted"><b>Population: </b>' + element.population + '</p><p class="card-text mb-0 text-muted"><b>Region: </b>' + element.region + '</p> <p class="card-text text-muted mb-4"><b>Capital:</b>' + element.capital + '</p></div></a> </div>';
        fragment.appendChild(cardDiv);
    }
    cards_countries.appendChild(fragment);
}

const drawAllCountries = async () => {
    const res = await getCountries();
    draw(res);
}

const getRegions = async () => {
    const res = await getCountries();
    // Obtén una lista única de regiones
    const uniqueRegions = [...new Set(res.map(country => country.region))];

    // Agregar las nuevas opciones al elemento <select>
    uniqueRegions.forEach(region => {
        const option = document.createElement("option");
        option.value = region; // Establece el valor de la opción
        option.text = region;  // Establece el texto visible de la opción
        selectElement.appendChild(option); // Agrega la opción al select
    });
}

const filterByRegion = async () => {
    const res = await getCountries();
    const filterCountries = res.filter(country => country.region === selectElement.value);
    draw(filterCountries);
}

const drawCountry = async () => {
    const res = await getCountries();
    const filterCountries = res.filter(country => country.name.toLowerCase().startsWith(txtName.value.toLowerCase()));
    draw(filterCountries);
}

