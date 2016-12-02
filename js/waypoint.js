
$(function() {

  
    var $centre = $('.sec1');

    $centre.waypoint(function(direction){ reset:true
    $('.chart1, .chart2, .chart3, .chart4, .chart5, .chart6, .chart7, .chart8, .chart9, .chart1, .chart10').easyPieChart({
      onStep: function(from, to, percent) { 
        $(this.el).find('.percent').text(Math.round(percent));

      }
      
    });
  
},{ offset: '50%' });
    
  });