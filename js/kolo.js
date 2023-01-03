fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
      .then(res =>{
       return res.json();
      })
      .then(data =>{
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
        
        new Chart("container", {
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
        });
      })
      .catch(error => console.log(error))
