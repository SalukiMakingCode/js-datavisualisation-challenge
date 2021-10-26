/*******************Create canvas*******************/
const canvasH1 = () =>{

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");

    canvas.className="canvas";
    canvas.id="canvasHeader";
    canvas.style.width = "100%";
    canvas.style.backgroundColor= "blue";
    document.getElementById("firstHeading").append(canvas);

    /******************Fetch*********************/
    const myGraph = document.querySelector('canvas');
    fetch('')
}
canvasH1();

const url = "https://canvasjs.com/services/data/datapoints.php";

    fetch(url)
      .then(response => response.json())
      .then(repos => {
          const repoList = repos.map(repo => repo.name);
          console.log(repoList);
      })
      .catch(err => console.log(err))