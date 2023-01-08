// This function adds an HTML table to the page with data from the `data` argument.
function table(data) {
  // Get the list of column names from the data.
  var col = [];
  for (var i = 0; i < data.length; i++) {
    for (var key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  // Create the table element.
  var table = document.createElement("table");

  // Add a row for the column names.
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // Add a row for each item in the data.
  for (var i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);
    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = data[i][col[j]];
    }
  }

  // Add the table to the page.
  var divContainer = document.getElementById("table");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}


function yearCarCounter(data){
    let year1 = 0
    let year2 = 0
    let year3 = 0
    let year4 = 0
    let year5 = 0
    let year6 = 0
    data.forEach(data =>{
    
      const year = data.Rok_produkcji;
      
      if (year == 2000){
        year1+=1

      }else if (year == 2001){
        year2+=1

      }else if (year == 2002){
        year3+=1

      }else if (year == 2003){
       year4+=1

      }else if (year == 2004){
        year5+=1

      }else if (year == 2005){
        year6+=1

      }
     
    })

    var xValues = ["2000", "2001", "2002", "2003", "2004", "2005"];
    var yValues = [year1,year2,year3,year4,year5,year6];
    var barColors = ["red", "green","blue","orange","brown","purple"];
    
    new Chart("chart1", {
      type: "horizontalBar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues,
          borderWidth: 2
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Ilość aut wyprodukowanych w danym roku",
          fontSize: 40,
          fontColor: 'black'
        },
        scales: {
          xAxes: [{
            ticks: {
              min: 8,
              max:26,
              fontSize: 40,
              fontColor: 'black'
            },
           
          }],
          yAxes: [{
            ticks: {
              fontSize: 40,
              fontColor: 'black'
            },
           barThickness: 40
          }]
        }
      }
    })
}
  


function brandCounter(data){
        let nissan= 0
        let ferrari= 0
        let toyota= 0
        let bmw= 0
        let audi= 0
        let mercedes= 0



        data.forEach(data =>{
        
          const brand = data.Marka;
          
          if (brand == "nissan"){
                  nissan+=1

          }else if (brand == "ferrari"){
                  ferrari+=1

          }else if (brand == "toyota"){
                  toyota+=1
            
          }else if (brand == "bmw"){
                  bmw+=1
          
        }else if (brand == "audi"){
                  audi+=1
          
        }else if (brand == "mercedes"){
                  mercedes+=1
          }
        })
    
        var xValues = ["mercedes","audi","bmw","toyota","ferrari","nissan"];
        var yValues = [mercedes,audi,bmw,toyota,ferrari,nissan];
        
        
        new Chart("chart2", {
          type: 'polarArea',
          data: {
            labels: xValues,
            datasets: [
              {
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: yValues,
                
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: "Ilość samochodów z danej marki",
              fontSize: 40,
              fontColor: 'black'
            }
           
          }
      })
    

}


function avgConsumption(data){
        let engine1 = []
        let gas=0
        let engine2 = []
        let petrol= 0
        let engine3 = []
        let diesel=0


        data.forEach(data =>{
        
          const engine = data.Silnik;
          const consumption = data.Srednie_spalanie
          
          if (engine == "gaz"){
            engine1.push(consumption);
            gas+=consumption

          }else if (engine == "benzyna"){
            engine2.push(consumption);
            petrol+=consumption

          }else if (engine == "diesel"){
            engine3.push(consumption);
            diesel+=consumption
          }
        avg_gas=gas/engine1.length;
        avg_petrol=petrol/engine2.length;
        avg_diesel=diesel/engine3.length
        })
    
        var xValues = ["gaz","benzyna","diesel"];
        var yValues = [avg_gas,avg_petrol,avg_diesel];
        var barColors = ["red", "green","blue"];
        
        new Chart("chart3", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues,
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Średnie spalanie a rodzaj silnika",
              fontSize: 40,
              fontColor: 'black'
            },
            scales: {
              xAxes: [{ticks: {min: 6, max:14,fontSize: 40,fontColor: 'black'}}],
              yAxes: [{ticks: {min: 6, max:14,fontSize: 40,fontColor: 'black'}}],
              
          }
          }
        })
    }

function engineTypes(data){
        let gas=0
        let petrol= 0
        let diesel=0
        
        data.forEach(data =>{
        
          const engine = data.Silnik;
          
          if (engine == "gaz"){
            gas+=1

          }else if (engine == "benzyna"){
            petrol+=1

          }else if (engine == "diesel"){
            diesel+=1
          }   
        })   
        var xValues = ["gaz","benzyna","diesel"];
        var yValues = [gas,petrol,diesel];
        var barColors = ["blue", "green","black"];
        
        new Chart("chart4", {
            type: 'doughnut',
            data: {
              labels: xValues,
              datasets: [
                {
                 backgroundColor: barColors,
                  data: yValues,      
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Silniki w Samochodach',
                fontSize: 40,
                fontColor: 'black'
              },
              labels: {
                  fontSize: 40
              }
            }
        })
    
    }


async function get_data() {
    const response = await fetch("https://my.api.mockaroo.com/samochody.json?key=a98778a0");
    const data = await response.json();
    
   
    yearCarCounter(data);
    brandCounter(data);
    avgConsumption(data);
    engineTypes(data);
    table(data);
  }

get_data()
