/*******************Create canvas*******************/
const canvasH1 = () =>{

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");

    canvas.className="canvas";
    canvas.id="canvasHeader";
    canvas.style.width = "100%";
    //canvas.style.backgroundColor= "blue";
    document.getElementById("firstHeading").append(canvas);

    /******************Fetch*********************/
    //const myGraph = document.querySelector('canvas');
    //fetch('')
}
canvasH1();

let arrayGraph1=[];
let url = "https://canvasjs.com/services/data/datapoints.php";

    let Labels="";
    let Data=[];
    fetch(url, { cache: "reload" })
      .then(response => response.json())
      .then(repos => {
          arrayGraph1=repos;
          let temp=[];
          for (let i=0; i<arrayGraph1.length; i++) {
              temp=arrayGraph1[i].toString().split(",");
              if (i<arrayGraph1.length-1) Labels=Labels+temp[0];
              else Labels=Labels+temp[0];
              Data.push(temp[1]);
          }
          Data.push(Labels)
          return Data;
      })
        .then ( data=> {
            console.log(data);
            Labels=data[data.length-1];
            data.pop();
            let ctx = document.getElementById('canvasHeader');
            let graph = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Labels,
                    datasets: [{
                        label: '',
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
                    indexAxis: 'x',
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })

      .catch(err => console.log(err))
