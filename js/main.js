
fetch('https://my.api.mockaroo.com/samochody.json?key=a98778a0')
      .then(res =>{
       return res.json();
      })
      .then(data =>{
        data.forEach(data =>{
       
          const markup =`<li>${data.Marka}</li>`;
          console.log(markup)
          console.count()
          document.querySelector('table').insertAdjacentHTML('beforeend', markup)
        })
      })
      .catch(error => console.log(error))