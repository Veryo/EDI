
anychart.onDocumentReady(function () {
    fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
        .then(res =>{
         return res.json();
        })
        .then(data =>{
          let benzyna  = 0
          let diesel  = 0
          let gaz  = 0
       
        
          data.forEach(data =>{
          
            const typ =data.Silnik;
        
            const cena = data.Rok_produkcji
            if (typ == "benzyna"){
              benzyna +=1
            }else if (typ == 'diesel'){
              diesel +=1
            }else if (typ == 'gaz'){
              gaz +=1
            }
          })
      var data = anychart.data.set([
      ['Diesel', benzyna],
      ['Benzyna', diesel],
      ['Gaz', gaz]
    ]);
    
    // create a pie chart with the data
    var chart = anychart.pie(data);
    
    // set the chart radius making a donut chart
    chart.innerRadius('55%')
  
    // create a color palette
    var palette = anychart.palettes.distinctColors();
   
    // set the colors according to the brands
    palette.items([
      { color: '#1dd05d' },
      { color: '#000000' },
      { color: '#00a3da' }
    ]);
  
    // apply the donut chart color palette
    chart.palette(palette);
    
    // set the position of labels
    chart.labels().format('{%x} — {%y}%').fontSize(16);
    
    // disable the legend
    chart.legend(false);
    
    // format the donut chart tooltip
    chart.tooltip().format('Ilosc: {%PercentValue}');
  
    // create a standalone label
    var label = anychart.standalones.label();
  
    // configure the label settings
    label
      .useHtml(true)
      .text(
        '<span style = "color: #313136; font-size:20px;">Silniki w samochodach</span>'
      )
      .position('center')
      .anchor('center')
      .hAlign('center')
      .vAlign('middle');
    
    // set the label as the center content
    chart.center().content(label);
    
    // set container id for the chart
    chart.container('container');
    
    // initiate chart drawing
    chart.draw();
  
  });
  
        })
    .catch(error => console.log(error))
    // add data
    