fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
      .then(res =>{
       return res.json();
      })
      .then(data =>{
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
        var barColors = ["brown", "black","green"];
        
        new Chart("chart3", {
          type: 'polarArea',
          data: {
            labels: xValues,
            datasets: [
              {
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: yValues
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: "Ilość samochodów z danej marki"
            }
          }
      })
    })
    .catch(error => console.log(error))