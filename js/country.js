const countryLoad = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>countriesUser(data))
}


const countriesUser =countries =>{
   
   //for(const count of country){
    const counttriesContainers = document.getElementById('countries-count');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML =`
        <h3>Name: ${country.name.common}</h3>
        <p>Capital:${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        counttriesContainers.appendChild(countryDiv);
    });
   
}

const loadCountryDetail = (code) =>{
   // console.log('Data pawa jacce na', code)
   const url =`https://restcountries.com/v3.1/alpha/${code}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML=`
    <h2>Details:${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

countryLoad();