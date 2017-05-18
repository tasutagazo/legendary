$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
    function imageIsLoaded(e) {
    	$('#myImg').attr('src', e.target.result);
	};
	$('#create_div').click(function(){
	})
});
   var baloon = $('#mySpec');
   function runIt() {
       baloon.animate({top:'+=20px'}, 1000);
       baloon.animate({top:'-=20px'}, 1000, runIt);
   }
   var sound = new Howl({
    src: ['audio/audio_file.mp3']
  });

$(document).ready(function(){
    var audio = new Audio('../Final_Project/audio/audio_file.mp3');
    $('#initiator').click('click', function(){
        $('#initiator').hide();     
        $("#decorator").animate({"left": "33%"}, 1000).queue(function(){
            $('#initiator2').show();  
            $('#initiator2').on('click', function(){
                $('#initiator2').hide();   
                $("#myImg").animate({"left": "33%"}, 1000).queue(function(){ 
                    $('#initiator3').show();    
                    $('#initiator3').on('click', function(){
                        $('#initiator3').hide();
                        $("#myCap").animate({"left": "33%"}, 1500).queue(function(){
                            $('#initiator4').show(); 
                            $('#initiator4').on('click', function(){
                               $('#initiator4').hide();
                               $("#mySpec").animate({"left": "11%"}, 1000, function(){
                                     $("#mySpec").animate({"left": "22%"}, 1000, function(){
                                        $("#mySpec").animate({"left": "33%"}, 1000, function(){
                                            sound.play();
                                            runIt();
                                            jQuery("body").animate({
                                                    backgroundColor: "#000000"
                                            }, 1500 );
                                        })
                                    })
                               })
                            });
                        })
                    })   
                });
            })
        });
    })
    $('#first_content').fadeIn(3000);
    $('#identifier').fadeIn(3000);
    $(':file').change(function(){
        $('#first_content').fadeOut(1000);
        $('#identifier').fadeOut(1000);
        $('label').fadeOut(1500).queue(function(){
            $('#initiator').css({"display": "block"});
        })
    });
})
// $(document).ready(function(){
// 	$(".draggableDiv").draggable();
// 	$('.drag_resi').resizable().draggable();
// })

