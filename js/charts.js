
function chart1(data){
    let data1 = 0
    let data2 = 0
    let data3 = 0
    let data4 = 0
    let data5 = 0
    let data6 = 0
    data.forEach(data =>{
    
      const rok = data.Rok_produkcji;
      
      if (rok == 2000){
        data1+=1

      }else if (rok == 2001){
        data2+=1

      }else if (rok == 2002){
        data3+=1

      }else if (rok == 2003){
        data4+=1

      }else if (rok == 2004){
        data5+=1

      }else if (rok == 2005){
        data6+=1

      }
     
    })

    var xValues = ["2000", "2001", "2002", "2003", "2004", "2005"];
    var yValues = [data1,data2,data3,data4,data5,data6];
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
  


function chart2(data){
        let nissan= 0
        let ferrari= 0
        let toyota= 0
        let bmw= 0
        let audi= 0
        let mercedes= 0



        data.forEach(data =>{
        
          const marka = data.Marka;
          
          if (marka == "nissan"){
                  nissan+=1

          }else if (marka == "ferrari"){
                  ferrari+=1

          }else if (marka == "toyota"){
                  toyota+=1
            
          }else if (marka == "bmw"){
                  bmw+=1
          
        }else if (marka == "audi"){
                  audi+=1
          
        }else if (marka == "mercedes"){
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


function chart3(data){
        let silnik1 = []
        let gaz=0
        let silnik2 = []
        let benzyna= 0
        let silnik3 = []
        let diesel=0


        data.forEach(data =>{
        
          const silnik = data.Silnik;
          const spalanie = data.Srednie_spalanie
          
          if (silnik == "gaz"){
            silnik1.push(spalanie);
            gaz+=spalanie

          }else if (silnik == "benzyna"){
            silnik2.push(spalanie);
            benzyna+=spalanie

          }else if (silnik == "diesel"){
            silnik3.push(spalanie);
            diesel+=spalanie
          }
        avg_gaz=gaz/silnik1.length;
        avg_benzyna=benzyna/silnik2.length;
        avg_diesel=diesel/silnik3.length
        })
    
        var xValues = ["gaz","benzyna","diesel"];
        var yValues = [avg_gaz,avg_benzyna,avg_diesel];
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
              text: "Średnie spalanie na rodzaj silnika",
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

function chart4(data){
        let gaz=0
        let benzyna= 0
        let diesel=0
        
        data.forEach(data =>{
        
          const silnik = data.Silnik;
          
          if (silnik == "gaz"){
            gaz+=1

          }else if (silnik == "benzyna"){
            benzyna+=1

          }else if (silnik == "diesel"){
            diesel+=1
          }   
        })   
        var xValues = ["gaz","benzyna","diesel"];
        var yValues = [gaz,benzyna,diesel];
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


function tabelka(data){
    var col=[]
    for(i in data){
      for(var key in data[i]){
        if( col.indexOf(key) ===-1){
          
        }
      }
    }
}


async function get_data() {
    const response = await fetch("https://my.api.mockaroo.com/samochody.json?key=a98778a0");
    const data = await response.json();
    
   
    chart1(data);
    chart2(data);
    chart3(data);
    chart4(data);
  }

get_data()
