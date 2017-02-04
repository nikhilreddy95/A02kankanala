function calculate() 
{
	
	 var fstValue = $("#x1").val();
	 
	 var amount1 = 0;
	 if(fstValue!="" && fstValue>0)
	 {
 	 amount1 = parseFloat(fstValue) * 1.84;
	 }

	var scdValue = $("#x2").val();
	 if(scdValue!=""&& scdValue>0)
	{	 
	 amount1 = amount1+parseFloat(scdValue) * 2.1;
	}

	var trdValue = $("#x3").val();
	 if(trdValue!="" && trdValue>0)
	 {
	 amount1 = amount1+ parseFloat(trdValue) * 3;
	 }

	var frtValue = $("#x4").val();
	 if(frtValue!=""&& frtValue>0)
	 {
	 amount1 = amount1+ parseFloat(frtValue) * 1.50;
	 }

	var fifValue = $("#x5").val();
	 if(fifValue!=""&& fifValue>0)
	{
	 amount1 = amount1+ parseFloat(fifValue) * 4;
	}

	var sixValue = $("#x6").val();
	if(sixValue!=""&& sixValue>0)
	{ 
	 amount1 = amount1+ parseFloat(sixValue) * 5;
	}
	 alert('Total Cost: $' +amount1 +'\Your order has been placed');
	
};