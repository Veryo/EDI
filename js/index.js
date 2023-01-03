fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
  .then(res =>{
   return res.json();
  })
  .then(data =>{
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
    
    new Chart("myChart", {
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
            barThickness: 40
          }],
          yAxes: [{
            ticks: {
              min: 8,
              max:26,
              fontSize: 40,
              fontColor: 'black'
            },
            barThickness: 40
          }]
        }
      }
    });
  })
  .catch(error => console.log(error))
