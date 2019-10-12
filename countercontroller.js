

class CounterController{
    constructor( containerDomElement ){
        this.domElement = $(containerDomElement);
    }
    addCounter( initialNumber ){
      var counter = new Counter( initialNumber);
      var counterDom = counter.render();
      this.domElement.append( counterDom );
    }
}
