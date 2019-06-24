$(document).ready(function() {
var footer = {
  
  club: "Blacks & Whites GAA Club",
  address: "Tom Walsh Park, Skeoughvosteen, Co. Kilkenny",
  tele: "Telephone: +353 85-1546130",
  email: "Email: secretary.blackswhite.kilkenny@gaa.ie",
}

var template = $('#footer').html();
var templateScript = Handlebars.compile(template);
var html = templateScript(footer);
$(document.body).append(html);
});