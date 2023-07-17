function changeBackgroundColor(color){
	//document.body.style.backgroundColor = color;
	document.getElementById('redbut').style.visibility = '';
document.getElementById('bluebut').style.visibility = '';

}

function onload(){

document.getElementById('redbut').style.visibility = 'hidden';
document.getElementById('bluebut').style.visibility = 'hidden';



}

function red(){
	document.body.style.backgroundColor = 'red';
	

}
function blue(){

	document.body.style.backgroundColor = 'blue';


}