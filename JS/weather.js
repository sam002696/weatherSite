const apiKey = 'd0728f0580fed6cadf6cd39fd62c416f';
const searchCity = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    if (searchText == '') {
        alert('Type Something');
    }
    else {
        searchField.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data));
    }

}
const displayData = data => {
    console.log(data);
    const cityName = document.getElementById('city-name');
    const celsius = document.getElementById('celsius-value');
    const image = document.getElementById('image');
    const weatherDescription = document.getElementById('weather-description');
    cityName.innerText = `${data.name}`;
    const degreeCelsius = data.main.temp;
    let celsiusValue = convertToCelsius(degreeCelsius);
    celsius.innerText = `${(Math.round(celsiusValue))}`;
    weatherDescription.innerText = `${data.weather[0].main}`
    const newImage = data.weather[0].icon;
    const newUrl = `https://openweathermap.org/img/wn/${newImage}@2x.png`;
    image.src = newUrl;
}
const convertToCelsius = (celsius) => {
    const result = celsius - 273.15;
    return result;
}