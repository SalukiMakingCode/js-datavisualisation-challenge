/***************************Table3***************************/
const canvasGraph3 = () =>{
    let canvas = document.createElement('canvas');
    canvas.className="canvas";
    canvas.id="graph3";
    canvas.style.width = "100%";
    document.getElementById("Homicides").append(canvas);
}
canvasGraph3();

/**************Target the countries of table 3**************/
let table2=document.getElementById("table2");

let allCountry2 = [];
let allStats2007 = [];
let allStats2010 = [];
let arrayCountry2=table2.querySelectorAll('td');
for (let i=0;i<arrayCountry2.length;i++) {

arrayCountry2[i].setAttribute("id", "t"+i);
if (i===0 || i%3===0) arrayCountry2[i].setAttribute("class", "country2");

if (i===0 || i%3===0) allCountry2.push(arrayCountry2[i].innerText);


/****************Target the stat of table3****************/
//Stats 2007/09
if(i===1 || i%3===1) allStats2007.push(arrayCountry2[i].innerText);

//Stats 2010/12
if(i===2 || i%3===2) allStats2010.push(arrayCountry2[i].innerText);
}

/***********************Draw graph3***********************/
let ctx3 = document.getElementById('graph3');
let dataGraph3 = [];
const graph3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: allCountry2,
        datasets: [{
            label: '2007-09',
            data: allStats2007,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },{
            label: '2010-12',
            data: allStats2010,
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
    ],

    },
    options: {
        indexAxis: 'x',
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
