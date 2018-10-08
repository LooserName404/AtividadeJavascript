var stringerThings = [];
var t = 0;


$(document).ready(function(){
  $('button').click(function(){
    if($(this).hasClass('btn-gp-1')){
      $(this).toggleClass("active");
    };
    if($(this).hasClass('btn-gp-2')){
      stringerThings[t] = document.getElementById('myForm').elements[0].value;
      if (stringerThings[t].indexOf('<script>')) {
        if($('#boldme').hasClass('active')){
          stringerThings[t] = "<b>" + stringerThings[t] + "</b>";
        }
        if($('#italicme').hasClass('active')){
          stringerThings[t] = "<i>" + stringerThings[t] + "</i>";
        }
        if($('#underlineme').hasClass('active')){
          stringerThings[t] = "<u>" + stringerThings[t] + "</u>";
        }
        $('#myForm')[0].reset();
        var paragrapher =  $('#printmaster').html();
        $('#printmaster').html(paragrapher + " " + stringerThings[t]);
        t++;
      } else {
        alert("Stop right there, criminal scum!");
      }
    };
  });
});
