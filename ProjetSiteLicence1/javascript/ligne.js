
function choixsandwitch() {
	var d=document.forms["form1"];

	var i= d.menu1.selectedIndex;
switch(i){

    case 0: var t=new Array("","","","","","");break;
    case 1: var t=new Array("Pizza mexicain",
    	"pizza margaritta","pizza vegetarien",
    	"pizza Americain");break;
    case 2: var t=new Array("chawarma poulet",
    	"chawarma viande",
    	"chawarma mix (viande et poulet) ");break;
    case 3: var t=new Array("Hamb Mac",
    	"Hamb Tasty","Hamb-Fish","hamb-cheese");break;
	default :
	 var t=new Array("","","","","","");
	 break;

}
for (var i=0;i<t.length;i++) { 
    document.getElementById("select2").options[i].text=t[i];

} 
  

}

function test()
{
	var d=document.forms["form1"];
	var m1= d.menu1.selectedIndex;
	//var m2= d.menu2.selectedIndex;
	var m3= d.menu3.selectedIndex;
	var m4= d.menu4.selectedIndex;
	var m5= d.menu5.selectedIndex;

	if(m1!=0  && m3 !=0 && m4!=0 && m5!=0)
	{
		alert("votre commande a reùssi ")
		return true ;
	}
	else
	{
		alert("remplissez bien votre menu");
		return false;
	}


}
