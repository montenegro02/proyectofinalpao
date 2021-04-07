console.log('hello world');

(function () {
  const MENU_OBJ = {
    init: function () {
      console.log('cargando javascript...');

      this.eventHandlers();
    },

    eventHandlers: function () {
      document.querySelector('.hamburguer').addEventListener('click', function(){
        document.querySelector('.menu-navegacion').classList.toggle('spread');
      });
    

    }
 

  }

  MENU_OBJ.init();
})();