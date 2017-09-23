$(document).ready(function(){
	var updateName;
	var updatePrice;
	var deleteName;
	var addName;
	var addPrice;
	var unDef=0;
	//update operation
        $("#updateName").blur(function(){
			updateName=$(this).val();
		});
		$("#updatePrice").blur(function(){
			updatePrice=$(this).val();
		});
		$("#Update").click(function(){
			var i=0;
		var medicine= JSON.parse(localStorage.getItem('details'));
		for(i=0;i<medicine.length;i++) {
			if(medicine[i].medicineName==updateName) {
				if(updatePrice!=null){
				medicine[i].price=updatePrice;
				alert("updated")
				localStorage.setItem('details', JSON.stringify(medicine));
				location.reload();
				}
				break;
		    }
			
		}
		
		});
			$("#deleteMedi").blur(function(){
			deleteName=$(this).val();
		});
		$("#Delete").click(function(){
			var i=0;
		var medicine= JSON.parse(localStorage.getItem('details'));
		for(i=0;i<medicine.length;i++) {
			if(medicine[i].medicineName==deleteName) {
				medicine[i].medicineName="";
				medicine[i].price="";
				alert(deleteName+" "+"Deleted");
				localStorage.setItem('details', JSON.stringify(medicine));
				location.reload();
				break;
		    }
			
		}
		
		});
		//delete operation
		$("#deleteMedi").blur(function(){
			deleteName=$(this).val();
		});
		$("#Delete").click(function(){
			var i=0;
		var medicine= JSON.parse(localStorage.getItem('details'));
		for(i=0;i<medicine.length;i++) {
			if(medicine[i].medicineName==deleteName) {
				medicine[i].medicineName="";
				medicine[i].price="";
				//medicine.splice($.inArray(medicine[i].medicineName, medicine),1);
				/*medicine = jQuery.grep(medicine, function(value) {
                   return value != medicine[i].medicineName;
                    });*/
				alert(deleteName+" "+"Deleted");
				localStorage.setItem('details', JSON.stringify(medicine));
				location.reload();
				break;
		    }
			
		}
		
		});
		//Add operation
		    $("#addName").blur(function(){
			addName=$(this).val();
		});
		$("#addQuantity").blur(function(){
			addPrice=$(this).val();
		});
		$("#Add").click(function(){
			var i=0;
		var medicine= JSON.parse(localStorage.getItem('details'));
		if(addName!=null>0&&addPrice!=null){
		medicine.push({"medicineName":addName+"","price":addPrice+""});
		alert("Added");
		localStorage.setItem('details', JSON.stringify(medicine));
		location.reload();
		}
		});
			//disp operation
			var countClick=0;
			
		//$("#disp").click(function(){
			var i=0;
			var sNo=0;
		var medicine= JSON.parse(localStorage.getItem('details'));
			if(countClick==0) {
			for(var i=0;i<medicine.length;i++) {
				if((medicine[i].medicineName!="undefined"&&medicine[i].medicineName!="")&&(medicine[i].price!="undefined"&&medicine[i].price!="")){
					sNo++;
				$("#resultTable").append("<tr><td>"+sNo+"</td><td>"+medicine[i].medicineName+"</td><td>"+medicine[i].price+"</td></tr>");
			}
			//$("#resultTable").append("<tr><td colspan='3'></td><td>Total</td><td>"+total+"</td></tr>");
			//$("#disp").text("Hide");
			$("#tablePos").show();
			}
		
			
			
		}
		//});


		});