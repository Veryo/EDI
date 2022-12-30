fetch('https://my.api.mockaroo.com/samochody.json?key=db140a20')
      .then(res =>{
       return res.json();
      })
      .then(data =>{
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
         avg_gaz=gaz/silnik1.length
         avg_benzyna=benzyna/silnik2.length
         avg_diesel=diesel/silnik3.length
        })
    
        var xValues = ["gaz","benzyna","diesel"];
        var yValues = [avg_gaz,avg_benzyna,avg_diesel];
        var barColors = ["red", "green","blue"];
        
        new Chart("slupki", {
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
              text: "Średnie spalanie na rodzaj silnika "
            }
          }
        });
      })
      .catch(error => console.log(error))