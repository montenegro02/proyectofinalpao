const dataAccordion = [{
    "title": "¿Quieres saber más de nostros?",
  "desc": "Ve y visitanos en nuestra de página de facebook"
  },
  {
    "title": "¿Necesitas ayuda?",
    "desc": "Colsulta nuestro sistema de apoyo y recomendaciones de pedidos"
  },
  {
    "title": "¿Cómo saber si hay más que solo pijamas?",
    "desc": "En creaciones RoEl te aseguramos que hay mucha variedad, y sino lo tenemos trataremos de hacer las cosas a su gusto"
  },
  {
    "title": "¿Dónde estamos ubicados?",
    "desc": "Nos encuentras en Tacares, Carrillos Bajo"
  
  }];
  
  (function (){
      let ACCORDION = {
          init: function (){
              let _self = this;
              //Llamamos las funciones
              this.insertData(_self);
              this.eventHandler(_self);
          },
  
          eventHandler:function(_self){
              let arrayRefs = document.querySelectorAll('.accordion-title');
  
              for (let x = 0; x < arrayRefs.length; x++) {
                  arrayRefs[x].addEventListener('click', function(event){
                      console.log('event', event);
                      _self.showTab(event.target);
                  });
              }
          },
  
          showTab: function(refItem){
              let activeTab = document.querySelector('.tab-active');
  
              if(activeTab){
                  activeTab.classList.remove('tab-active');
              }
  
              console.log('show tab', refItem);
              refItem.parentElement.classList.toggle('tab-active');
          },
  
          insertData: function (_self) {
              dataAccordion.map(function (item, index){
                  //console.log('item!!!!!', item);
                  document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
              });
          },
  
          tplAccordionItem: function (item) {
              return(` <div class='accordion-item'>
              <p class='accordion-title'>${item.title}</p>
              <p class='accordion-desc'>${item.desc}</p>
              </div>`)},
          }
  
          ACCORDION.init();
  
  })();