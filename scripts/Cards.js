const dataCards = [{
    "title": "Ropa de niñ@s",
    "url_image":"https://scontent.fsjo9-1.fna.fbcdn.net/v/t1.6435-9/126331405_679193976118092_8939425244235277506_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=6lBTWOWs9FkAX8sA5vp&_nc_ht=scontent.fsjo9-1.fna&oh=1a502207b5b21077e6386cc144fc6143&oe=609321C8",
    "desc":"De las mejores cosas que le puedes regalar a los consentidos de la casa",
    "cta":"Show More",
    "link":"https://www.facebook.com/CreacionesRoel"
  },
      
  {
      "title": "Ropa de adulto",
      "url_image":"https://scontent.fsjo9-1.fna.fbcdn.net/v/t1.6435-9/126525218_679191779451645_4381074950996421784_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=w7820gt_ZssAX_EOb36&_nc_ht=scontent.fsjo9-1.fna&oh=d3437cd464f7164c2c721860334ab7ba&oe=6092AC49",
      "desc":" Concientete y que mejor con nuestros diseños.",
      "cta":"Show More",
      "link":"https://www.facebook.com/CreacionesRoel"
   },
  
   {
      "title": "Pijamas",
      "url_image":"https://scontent.fsjo9-1.fna.fbcdn.net/v/t1.6435-9/121584608_652824498755040_6510496569385413717_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=sI2HmW8BgsUAX9qqbcb&_nc_ht=scontent.fsjo9-1.fna&oh=24114eff2e5949d7b73bb5f6f468d4ac&oe=609290CE",
      "desc":"Si no encuentras lo que buscas, hacemos lo posible para que lo consigas",
      "cta":"Show More",
      "link":"https://www.facebook.com/CreacionesRoel"
   },
  
   {
      "title": "Variedades",
      "url_image":"https://scontent.fsjo9-1.fna.fbcdn.net/v/t1.6435-9/127189301_679193876118102_5808589758501014628_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=cY_NHqKL5fcAX-Tmy3B&_nc_ht=scontent.fsjo9-1.fna&oh=f02af43bc8cc785f154c4c2614c26295&oe=60942F80",
      "desc":"novedades y mas podrás encontrar en la parte de la tienda para obtener las mejores skin.",
      "cta":"Show More",
      "link":"https://www.facebook.com/CreacionesRoel"
  }];
  
  (function (){
      let CARD = {
          init: function (){
              console.log('card module was loaded');
              let _self = this;
              
              //Llamamos las funciones
              this.insertData(_self);
             // this.eventHandler(_self);
          },
  
          eventHandler:function(_self){
              let arrayRefs = document.querySelectorAll('.card-title');
  
              for (let x = 0; x < arrayRefs.length; x++) {
                  arrayRefs[x].addEventListener('click', function(event){
                      console.log('event', event);
                      _self.showTab(event.target);
                  });
              }
          },
  
          insertData: function (_self) {
              dataCards.map(function (item, index){
                  //console.log('item!!!!!', item);
                  document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item));
              });
          },
  
          tplCardItem: function (item, index) {
              return(` <div class='card-item' id="card-number-${index}">
              <img src="${item.url_image}"/>
              <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
              </div>`)},
          }
  
          CARD.init();
  
  })();