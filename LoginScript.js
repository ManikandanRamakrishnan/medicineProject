$(document).ready(function(){
var userName;
var password;



     $("#username").blur(function(){
			userName=$(this).val();
		});
		
		$("#password").blur(function(){
			password=$(this).val();
		});
		$("#Login").click(function(){
		  if(userName=="admin" && password=="admin" ) {
		  window.location.replace("index.html");
		  }
		  else{
		  $("#warning").text("Enter valid userId or Password");
		  
		  }
		
		
		});
		



});