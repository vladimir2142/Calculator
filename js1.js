var currentNumber=0;
var operCode = null;

function addDigit(digitToAdd){
	if (parseInt(document.getElementById('result').value) <10e+10)
	{

		if (document.getElementById('result').value ==0){
			document.getElementById('result').value =digitToAdd;
		}
		else {
			document.getElementById('result').value +=digitToAdd;
		}
	}
	
}

function operation(operationCode){
	if(operCode==null){
		operCode=operationCode;   
		currentNumber=parseInt(document.getElementById('result').value);
		
		clearInput();
		
	}else if(operationCode==5){
		if(operCode==0){
			currentNumber=currentNumber/parseInt(document.getElementById('result').value);
		} else if(operCode==1){
			currentNumber=currentNumber*parseInt(document.getElementById('result').value);
		} else if(operCode==2){
			currentNumber=currentNumber-parseInt(document.getElementById('result').value);
		} else if(operCode==3){
			currentNumber=currentNumber+parseInt(document.getElementById('result').value);
		}
		document.getElementById('result').value=currentNumber;
	} else{
		if(operCode==0){
			currentNumber=currentNumber/parseInt(document.getElementById('result').value);
		} else if(operCode==1){
			currentNumber=currentNumber*parseInt(document.getElementById('result').value);
		} else if(operCode==2){
			currentNumber=currentNumber-parseInt(document.getElementById('result').value);
		} else if(operCode==3){
			currentNumber=currentNumber+parseInt(document.getElementById('result').value);
		}
		document.getElementById("result").value=0;
		operCode=operationCode;

	}
}
function clearInput(){
	document.getElementById('result').value=0;
}
function resetAll(){
	currentNumber=0;
	document.getElementById("result").value=0;
	operCode=null;
}
function clearOne(){
	document.getElementById("result").value=Math.floor(parseInt(document.getElementById('result').value)/10);
}


