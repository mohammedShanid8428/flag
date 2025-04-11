async function getCountry(){
  response= await fetch("https://restcountries.com/v3.1/all")
  CountryData=await response.json()
  rows=""
  console.log(CountryData)

  CountryData.forEach(item => {
    rows+=`
    <div class="card m-3 p-4 text-light bg-dark rounded-0" style="width: 18rem; height:440px">
    <img src=${item.flags.svg} class="card-img-top img-fluid rounded-2" alt="..."style="height: 130pxpx;">
    <div class="card-body px-2">
      <h5 class="card-title">${item.name.official}</h5>
      <h6 class="card-title text-primary">Capital : ${item.name.capital}</h6>
      <h6 class="card-title ">Region : ${item.region}</h6>
      <h6 class="card-title ">Population : ${item.population}</h6>
      <h6 class="card-title "> : ${item.name.common} is ${item.unMember?'a member of Un': 'not a Member of UN'}</h6>
      <h6 class="card-title "> : ${item.name.common} is ${item.Independent?'an Independent Country': 'not an Independent Country'}</h6>
  
    </div>
    </div>
    `
    
  });
  countries.innerHTML=rows
}
getCountry()