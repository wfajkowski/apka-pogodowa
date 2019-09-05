export const Chart = require('chart.js');

export const drawChart = () => {
    // const data = await showMeWeather('metric')
    const hours = document.querySelectorAll('.forecast-hour');
    let takeHours = [];
    hours.forEach(hour => takeHours.push(parseInt(hour.textContent)))
    // console.log(takeHours)
    let dataset = [];
    const data = document.querySelectorAll('.temp-hourly');
    data.forEach(element => dataset.push(parseFloat(element.textContent)));
    // console.log(dataset);

    const weatherChart = document.querySelector('#weather-chart').getContext('2d');

    const chart = new Chart(weatherChart, {
        type: 'line',
        data: {
            labels: takeHours,
            datasets: [{
                // fill: false,
                data: dataset,
                backgroundColor: 'rgba(138, 136, 136, 0.56)'
            }]
        },
        options: {
            legend: {
                display: false,
            },
            responsive: true,
            events: ['click'],
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Hour'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });
    chart.canvas.style.width = '100%';
    chart.canvas.style.height = 'auto';

}