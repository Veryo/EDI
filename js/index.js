

fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
      .then(res =>{
       return res.json();
      })
      .then(data =>{
        let cena1 = []
        let cena2 = []
        let cena3 = []
        let cena4 = []
        let cena5 = []
        data.forEach(data =>{
        
          const rok = data.Rok_produkcji;
          const cena = data.Cena
          
          if (rok == 2001){
          
            cena1.push(cena);
          }else if (rok == 2002){
         
            cena2.push(cena);
          }else if (rok == 2003){
          
            cena3.push(cena);
          }else if (rok == 2004){
            
            cena4.push(cena);
          }else if (rok == 2005){
            cena5.push(cena);
          }
         
        })
    
        var xValues = ["2011", "2012", "2013", "2014", "2015"];
        var yValues = [cena1.length, cena2.length, cena3.length, cena4.length, cena5.length];
        var barColors = ["red", "green","blue","orange","brown"];
        
        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "World Wine Production 2018"
            }
          }
        });
      })
      .catch(error => console.log(error))
    