document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
     getCountry();
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
});

const getCountry = async () => {
    const url = "data.json";
    const init = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    };
    const req = await fetch(url, init);
    if (req.ok) {
        const res = await req.json();
        // Define tu condición de filtro
        const alpha3Code = document.getElementById("alpha3Code").value; 
        const countriesFiltrados = res.filter(country => country.alpha3Code === alpha3Code);
        // Ahora countriesFiltrados contiene el país que cumple con la condición
        document.getElementById("image").setAttribute('src', countriesFiltrados[0].flag);
        document.getElementById("txtCountry").innerText += countriesFiltrados[0].name;
        document.getElementById("txtName").innerText += countriesFiltrados[0].nativeName;
        document.getElementById("txtPopulation").innerText += countriesFiltrados[0].population;
        document.getElementById("txtRegion").innerText += countriesFiltrados[0].region;
        document.getElementById("txtSubRegion").innerText += countriesFiltrados[0].subregion;
        document.getElementById("txtCapital").innerText += countriesFiltrados[0].capital;
        document.getElementById("txtTop").innerText += countriesFiltrados[0].topLevelDomain;
        document.getElementById("txtCurrencies").innerText += countriesFiltrados[0].currencies[0].name;
        for (let i = 0; i < countriesFiltrados[0].languages.length; i++) {
            const element = countriesFiltrados[0].languages[i];
            document.getElementById("txtLanguages").innerText += element.name + ', ';
        }
        for (let i = 0; i < countriesFiltrados[0].borders.length; i++) {
            const element = countriesFiltrados[0].borders[i];
            document.getElementById("divBorders").innerHTML += '<div class="d-inline"> <a href="details.php?alpha3Code='+element+'" class="btn btn-sm border border-bg-secondary" type="button">' + element + '</a>'
        }
    }
}
