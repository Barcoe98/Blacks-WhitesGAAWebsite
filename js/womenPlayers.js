$(document).ready(function() {
var player = [
        {
            'position':'Corner Forward',
		    'firstname': "Jane",
	        'lastname': "O'Neil",
            'age':"20",
	        'email':'JaneoNeil@gmail.com'
        },
    
        {
            'position':'Centre Back',
			'firstname': "Denise",
		    'lastname': "Doyle",
            'age':"31",
		    'email':'DeniseD@gmail.com'
	    },
    
      {
            'position':'Centre Forward',
			'firstname': "Courtney",
		    'lastname': "Nolan",
            'age':"24",
		    'email':'CourtneyNolan@gmail.com'
	    },
    
      {
            'position':'Full Forward',
			'firstname': "Ellie",
		    'lastname': "Cleere",
            'age':"34",
		    'email':'CleereE@gmail.com'
	    },
    
        {
            'position':'Midfield',
			'firstname': "Sophie",
		    'lastname': "Murphy",
            'age':"26",
		    'email':'SMurphy@gmail.com'
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