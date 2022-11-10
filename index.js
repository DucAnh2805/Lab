const confirmed = document.querySelector('.canhiem')
const deaths = document.querySelector('.deaths')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bec43c742bmsh8a8733a193203bep1cd527jsna080bc136f94',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
    .then(res => res.json())
    .then((data) => {
    console.log(data)
    confirmed.innerHTML = data.data.confirmed + ' bệnh nhân'
    deaths.innerHTML = data.data.deaths + ' người'
    })