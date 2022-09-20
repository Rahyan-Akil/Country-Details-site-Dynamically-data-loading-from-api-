const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data =>displayCountries(data));
}

const displayCountries = countries =>{
 /* console.log(countries[0].flags.png) */
 const countriesHTML = countries.map(country =>getcountryDetails(country));
 const container = document.getElementById('countries');
 container.innerHTML =countriesHTML.join(' ');//using join to join an array without comma

}
const getcountryDetails = ({name,flags,area,region}) =>{//doing destructuring in the parameter portion
   /*  console.log(country) */
  
    return`
    <div class="country">
    <h2>Country Name: ${name.common}</h2>
    <h2>Area: ${area}</h2>
    <h3>Continental: ${region}</h3>
    <img src="${flags.png}">
    </div>
    `
}
loadCountries();

/* option2:
const getcountryDetails = (country) =>{
    const {name,flags} = country; //doing destructuring for not to repeat country.name or country.flags 
     return`
     <div class="country">
     <h2>${name.common}</h2>
     <img src="${flags.png}">
     </div>
     `
 } */

/*  option-3:(orginal)
 const getcountryDetails = (country) =>{
    
     return`
     <div class="country">
     <h2>${country.name.common}</h2>
     <img src="${country.flags.png}">
     </div>
     `
 } */
