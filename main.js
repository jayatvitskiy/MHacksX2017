$(document).ready(function(){ // on page load

  $('.slider').slider({full_width: true}); // make slider on 'Home' page take up the entire width of the page

  var image = document.getElementById('image'); // image displayed on 'Learn' page
  var translatebox = document.getElementById('translatebox'); // input box on 'Translate' page
  var translateimg = document.getElementById('translateimg'); // image(s) displayed on 'Translate' page

  $('button').click(function(event){ // if a button defined with <button></button> tags is clicked

    if ($(event.target).attr('id') === "translate") { // double checking that it is the 'Translate' button on the 'Translate' page
      translateimg.innerHTML = ""; // clear displayed images first
      var chars = translatebox.value.toUpperCase().replace(/\s+/g, ''); // take input from input box, convert all letters to uppercase, remove all whitespace
      if (chars.match(/^[a-zA-Z0-9]+$/i)) { // if input string consists only of alphanumeric characters
   			for (var i = 0, len = chars.length; i < len; i++) { // loop through each character in the string
          translateimg.innerHTML += "<img src='pngs edited/" + chars.charAt(i) + ".PNG' width='300px' height='300px'>"; // display corresponding picture file
			  }
	      $(translatebox).val(''); // clear input box
      } else if (chars === "") { // if nothing was inputted, but 'Translate' button was still clicked
      	Materialize.toast('Please enter a message.', 2000); // toast alert lasting for 2 seconds
      } else { // if non-alphanumeric characters (e.g., punctuation) were inputted
      	Materialize.toast('Please enter only alphanumeric characters.', 3000); // toat alert lasting 3 seconds
      }
    }

  });

});
