var score=0;
function quest()
{
	var rep1=document.getElementById("rep11");
	var rep2=document.getElementById("rep22");	
	var rep3=document.getElementById("rep34");
	var rep4=document.getElementById("rep43");
	var rep5=document.getElementById("rep52");
	var rep6=document.getElementById("rep62");
	var rep7=document.getElementById("rep73");
	var rep8=document.getElementById("rep81");
	var rep9=document.getElementById("rep94");
	var rep10=document.getElementById("rep103");

	
	if(rep1.checked)
		{ score+=2; }
	if(rep2.checked)
		{ score+=2; }
	if(rep3.checked)
		score+=2;
	if(rep4.checked)
		score+=2;
	if(rep5.checked)
		score+=2;
	if(rep6.checked)
		score+=2;
	if(rep7.checked)
		score+=2;
	if(rep8.checked)
		score+=2;
	if(rep9.checked)
		score+=2;
	if(rep10.checked)
		score+=2;	


	if(score>=10)
		alert('Bravo vous avez eu '+score+' sur 20 vous etes un connaisseur de   Palm camayenne !');
	if(score<10)
	 {	
		 alert('il faut reviser la fiche de Palm, vous avez eu '+score+' sur 20 ')
	}


}



function init(){
		score=0;
}
