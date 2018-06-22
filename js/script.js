//waits until page is ready
$(document).ready(function() {
    
    
 $(".card").click(function(){
	$(this).toggleClass("highlight");	 
});

 $("#select_btn").click(function(){
	$(".card:not(.highlight)").hide();	 
});

$("#all_btn").click(function(){
	$(".card").show();	 
});

}); 