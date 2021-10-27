/**************************************Create canvas**************************************/
const canvasGraph2 = () =>{
    let canvas = document.createElement('canvas');
    canvas.className="canvas";
    canvas.id="graph2";
    canvas.style.width = "100%";
    document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").prepend(canvas);
}
canvasGraph2();
/**************************************Edit HTML by Javascript*******************************/
let table1=document.getElementById("table1");
let arrayCountry=table1.querySelectorAll('td');
for (let i=0;i<arrayCountry.length;i++) {
arrayCountry[i].setAttribute("id", "td"+i);
if (i===0 || i%12===0) arrayCountry[i].setAttribute("class", "country");
}
/********************************************Create the menu*********************************/
const Graph2Menu = () =>{
    let ul = document.createElement('ul');
    ul.className="menuCountry";
    ul.id="graph2Menu";
    ul.style.width="100%";
    ul.style.fontSize="1.8rem";
    ul.style.color="black";
    ul.style.lineHeight="3rem";
    document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police").prepend(ul);
}
Graph2Menu();

let i=0;
let lastCountry="";
document.querySelectorAll('.country').forEach((element) => {
    let li = document.createElement('li');
    li.className="listCountry";
    li.id="country"+i;
    li.textContent=element.textContent.replace(/[^a-zA-Z0-9\s]+/g, "");
    li.style.display="inline";
    li.style.cursor="pointer";
    if (i===0) document.getElementById("graph2Menu").appendChild(li);
    else document.getElementById(lastCountry).insertAdjacentElement('afterend', li);
    lastCountry="country"+i;
    i++;
});

i=1;
document.querySelectorAll('.listCountry').forEach((element) => {
    let span = document.createElement('span');
    span.textContent=" | ";
    if (i<document.querySelectorAll('.listCountry').length) document.getElementById(element.id).insertAdjacentElement('afterend', span);
    i++;
});
/**************************************When click a country*******************************/
document.querySelectorAll('.listCountry').forEach((element) =>
    element.addEventListener('click', () => { clickButtonCountry(element.id);}));

function clickButtonCountry (id) {
    id=id.substring(7, 9);
    changeCountry(id);
}

function changeCountry(id) {

    animateCss('#graph2', 'zoomOutLeft').then((message) => {
        graph2.destroy();
        drawGraph(id);
        animateCss('#graph2', 'backInLeft'); //zoomOutLeft
    });

}

/***************************draw horizontale bar by country*******************************/
let graph2="";
function drawGraph(country) {
    let data=[];
    let limit=(country*12)+12;
    for (let i=(country*12)+1;i<limit;i++) {
        data.push(Number(document.getElementById("td"+i).textContent.replace(",", ".")));
    }
    let ctx2 = document.getElementById('graph2');
    graph2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            datasets: [{
                label: "Click on the menu above to change country",
                data: data,
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
}
drawGraph(0);