/**************************************Create canvas**************************************/
const canvasGraph2 = () =>{
    let canvas = document.createElement('canvas');
    canvas.className="canvas";
    canvas.id="graph2";
    canvas.style.width = "100%";
    //  canvas.style.backgroundColor = "blue";
    document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").prepend(canvas);
}
const canvasGraph2Menu = () =>{
    let canvas = document.createElement('canvas');
    canvas.className="menuCountry";
    canvas.id="graph2Menu";
    canvas.style.width = "100%";
    //  canvas.style.backgroundColor = "blue";
    document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").prepend(canvas);
}
canvasGraph2();
canvasGraph2Menu();

/**************************************Edit HTML by Javascript*******************************/
let table1=document.getElementById("table1");
let arrayCountry=table1.querySelectorAll('td');
for (let i=0;i<arrayCountry.length;i++) {

arrayCountry[i].setAttribute("id", "td"+i);
if (i===0 || i%12===0) arrayCountry[i].setAttribute("className", "country");
}

/**************************************When click a country*******************************/
document.querySelectorAll('.country').forEach((element) =>
    element.addEventListener('click', () => { clickButtonCountry(element.id);}));

function clickButtonCountry (id) {
    id=id.substring(7, 8);
    changeCountry(id);
}

function changeCountry(id) {
   // animateCss('#my-element57', 'flipOutY');
}

/*******************draw horizontale bar by country (one build - need multi)************************/

let ctx2 = document.getElementById('graph2');
let graph2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            label: '',
            data: [12, 19, 3, 5, 2, 3, 15, 46, 25, 10, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});