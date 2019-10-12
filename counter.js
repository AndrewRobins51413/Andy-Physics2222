

class Counter {
  counstructor( startingNumber ){
    if( startingNumber > 9 || startingNumber < 0){
      startingNumber =0;
    }
    this.handleClick = this.handleClick.bind( this );
                  //bind to allow DOM element to call function later
    this.currentValue = startingNumber;
    this.domElements = {
      container: null,
      text: null
    }
  }
  updateText(){
    this.domElements.text.text( this.currentValue );
  }
  handleClick(){
    this.currentValue++;
    this.updateText();

    console.log("clicked!");
  }
  render (){
    this.domElements.container = $("<div>",{
      class: 'counterContainer',
        on: {
          click: this.handleClick
        }
    });  //DOM elements with descriptive names - easier to use in the future.
    this.domElements.text = $("<div>",{
      class: 'counterText'
    })
    this.domElements.container.append( this.domElements.text );
    //append the child into the parent
    return this.domElements.container;
    //return the element to the parent - parent puts it on the page
  }
}
