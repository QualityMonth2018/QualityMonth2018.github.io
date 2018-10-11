window.addEventListener("load", function(){

	var finalElements = document.querySelectorAll(".container.final");
	finalElements[0].parentNode.removeChild(finalElements[0]);
	finalElements[1].parentNode.removeChild(finalElements[1]);

	function isCheater(){

		let cheater = false;

		for(let i = 0; i<3; i++){
			
			if(window.localStorage.getItem("stage"+i)){

				let result = JSON.parse(window.localStorage.getItem("stage"+i));
				if(result.find((el)=>{return el.slot != el.final})){
					cheater = true;
				}

			}
			else{
				cheater = true;
			}
		}

		return cheater;
	}

	if(isCheater()){
		document.body.appendChild(finalElements[0]);
	}
	else{
		document.body.appendChild(finalElements[1]);
	}
});