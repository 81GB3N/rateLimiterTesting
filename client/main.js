// Make an HTTP GET request to fetch data from the backend
const button = document.querySelector('button');


button.addEventListener('click', ()=>{
    fetch('http://localhost:3000/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response body as JSsON
    })
    .then(data => {
        // Handle the data received from the backend
        console.log('Data from the backend:', data);
        document.querySelector('div').innerHTML= data.ip;
    })
    .catch(error => {
        // Handle errors that occurred during the request
        console.error('Error fetching data:', error);
    });
})



