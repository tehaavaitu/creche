function forfait(){
//var x = document.getElementById("age"); // affecter les proprietes d'un element identifié par son Id à une variable permet d'ecrire aussi
//var a = x.value;
var a = document.getElementById("age").value;
var b = document.getElementById("ressource").value;
    
	
	if (a>=3 && a<=6){
		var fa=300-(300*0.3);
		if (b<=4000){
		var fr=fa-(fa*0.05);
		}
		if (b>4000 && b<=7000){
		var fr=fa-(fa*0.04);
		}
		if (b>7000 && b<=10000){
		var fr=fa-(fa*0.03);
		}
		if (b>10000 && b<=11000){
		var fr=300;
		}
	}
	
	if (a>6 && a<=12){
		var fa=300-(300*0.25);
		if (b<=4000){
		var fr=fa-(fa*0.05);
		}
		if (b>4000 && b<=7000){
		var fr=fa-(fa*0.04);
		}
		if (b>7000 && b<=10000){
		var fr=fa-(fa*0.03);
		}
		if (b>10000 && b<=11000){
		var fr=300;
		}
	}
	
	if (a>12 && a<=24){
		var fa=300-(300*0.2);
		if (b<=4000){
		var fr=fa-(fa*0.05);
		}
		if (b>4000 && b<=7000){
		var fr=fa-(fa*0.04);
		}
		if (b>7000 && b<=10000){
		var fr=fa-(fa*0.03);
		}
		if (b>10000 && b<=11000){
		var fr=300;
		}
	}
	
	if (a>24){
		var fa=300;
		if (b<=4000){
		var fr=fa-(fa*0.05);
		}
		if (b>4000 && b<=7000){
		var fr=fa-(fa*0.04);
		}
		if (b>7000 && b<=10000){
		var fr=fa-(fa*0.03);
		}
		if (b>10000 && b<=11000){
		var fr=300;
		}	
	}
		
	var ta= fr*12;
	document.getElementById("resultat").value = ta +" €";
}