let key = '14358ddeaa764a3485f103908252408'
let button = document.querySelector('button')
let input = document.querySelector('input')

geoURL = (city)=>{
    return `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
}


function addToTaskList(value) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById("taskList").appendChild(li);
}



button.addEventListener('click', (ev) => {
    let url = geoURL(input.value);
    axios.get(url)
        .then(res => {
            let data = res.data;
            let lati = data.location.lat;
            let long = data.location.lon;
            let temp = data.current.temp_c
            console.log(data)
            addToTaskList(`Latitude: ${lati}`);
            addToTaskList(`Longitude: ${long}`);
            addToTaskList(`Temperature: ${temp}`);
        })
        .catch(err => {
            console.log(err);
        })
});
