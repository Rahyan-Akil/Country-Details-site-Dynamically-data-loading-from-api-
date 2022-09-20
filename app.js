const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data =>displayCountries(data));
}

const displayCountries = countries =>{
 /* console.log(countries[0].flags.png) */
 const countriesHTML = countries.map(country =>getcountryDetails(country));
 const container = document.getElementById('countries');
 container.innerHTML =countriesHTML.join(' ');
/*  const joincountriesHTML = countriesHTML.join('');
 console.log(joincountriesHTML) */
}
const getcountryDetails = country =>{
   /*  console.log(country) */
   const {name,flags} = country; //doing destructuring for not to repeat country.name or country.flags 
    return`
    <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
    </div>
    `
}
loadCountries();