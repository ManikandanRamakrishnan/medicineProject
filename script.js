
$(document).ready(function(){
	var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

	var value;
	var clicked=false;
	 var price;
	 var quantity;
	  var medicineArray=new Array(30);
	 var priceArray=new Array(30);
	 var quantityArray=new Array(30);
	 var count=-1;
	 var countClick=0;
var medicine= JSON.parse(localStorage.getItem('details'));
$("#nameInput").click(function(){
	
	
	$("#nameInput").keyup(function(e){
	value=$("input").val().toLowerCase();
	var len=value.length;
	$("#list").empty();
	for(var i=0;i<medicine.length;i++) {
		
		if(value==medicine[i].medicineName.substring(0,parseInt(len))){
			var  id="A"+i;
			$("#list").append("<li id='"+id+"'"+"><p>"+medicine[i].medicineName+"</p></li>");
		}
	}
	if(value==""){
		$("#list").empty();
	}
	});
	});
	    $("#nameInput").blur(function(){
		$("li").click(function(){
			var trueId=this.id;
			var slected=$(this).text();
			countClick=2;
			medicineArray[++count]=(slected);
		$("#nameInput").val(slected);
		$("#list").empty();
		for(var i=0;i<medicine.length;i++) {
			if(slected==medicine[i].medicineName) {
				price=parseInt(medicine[i].price);
				priceArray[count]=price;
				break;
			}
		}
		});
		});
		$("#numberId").blur(function(){
			countClick=2;
			quantity=parseInt($(this).val());
			quantityArray[count]=quantity;
		});
		$("#add").click(function(){
			$("#nameInput").val("");
			$("#numberId").val("");
			
		});
		$("#reset").click(function(){
			location.reload();
			
		});
		
		$("#calc").click(function(){
			if(countClick==2) {
			var total=0;
			for(var i=0;i<=count;i++) {
				total+=priceArray[i]*quantityArray[i];
				var sNo=i+1;
				$("#resultTable").append("<tr><td>"+sNo+"</td><td>"+medicineArray[i]+"</td><td>"+quantityArray[i]+"</td><td>"+priceArray[i]+"</td><td>"+priceArray[i]*quantityArray[i]+"</td></tr>");
			}
			$("#resultTable").append("<tr><td colspan='3'></td><td>Total</td><td>"+total+"</td></tr>");
			$("#tablePos").css("display","table");
			  countClick=3;
			}
			
			
		});
		/*$('#cmd').click(function () {   
             doc.fromHTML($('#resultTable').html(), 15, 15, {
              'width':100,
            'elementHandlers': specialElementHandlers
            });
            doc.save('sample-file.pdf');
             });*/

		$("#adminlogout").click(function(){
			window.close();
			
		});
		
	
		
});
	