

var controller = null;

$(document).ready( startCounterHell() );

function startCounterHell(){
  controller = new CounterController( '#counterContainer');
  controller.addCounter( 1 );
  controller.addCounter( 8 );
  controller.addCounter( 8 );
}
