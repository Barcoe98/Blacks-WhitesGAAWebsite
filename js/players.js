$(document).ready(function() {
var player = [
        {
            'position':'Corner Forward',
		    'firstname': "Henry",
	        'lastname': "O'Neil",
            'age':"20",
	        'email':'HenryoNeil@gmail.com'
        },
    
        {
            'position':'Centre Back',
			'firstname': "John",
		    'lastname': "Doyle",
            'age':"31",
		    'email':'JohnD@gmail.com'
	    },
    
      {
            'position':'Centre Forward',
			'firstname': "Martin",
		    'lastname': "Nolan",
            'age':"24",
		    'email':'MartinNolan@gmail.com'
	    },
    
      {
            'position':'Full Forward',
			'firstname': "Tommy",
		    'lastname': "Cleere",
            'age':"34",
		    'email':'CleereT@gmail.com'
	    },
    
        {
            'position':'Midfield',
			'firstname': "Jim",
		    'lastname': "Murphy",
            'age':"26",
		    'email':'jMurphy@gmail.com'
	    }
  ];
    
    

var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(player);
$("#content-placeholder").html(theCompiledHtml);

$('#plylist').submit(function() {
  newply= {
     position:$('#position').val(),
	 firstname:$('#firstname').val(),
	 lastname:$('#lastname').val(),
	 age:$('#age').val(),
	 email:$('#email').val()
  }

  player.push(newply);
  var theCompiledHtml = template(player);
  $("#content-placeholder").html(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
  $('input[type="email"]').val("");
  return false;
});
});


function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}