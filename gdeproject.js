		var text = "Мама мыла раму";
		var arr = [];
		var temp = ["а","ы","у"]
	 // arr =	text.split("")

	//  for (var i = 0; i < text.length; i++) {
	// arr.push(text[i])	 for (var i = 0; i < text.length; i++) {
	//  }

	// for (var i = text.length - 1; i >= 0; i=i-2) {
	// arr.push(text[i])
	// }
	
	for (var i = text.length - 1; i >= 0; i--){
		for (var a = 0; a < temp.length; a++) { 
			if(text[i]==temp[a])
			// {
			// 	if(text[i]=="a"){
			// 		text[i]="!"
			// 	}
			// }

			arr.push(text[i])
		}}
		console.log(arr)

		$("html").prepend("<h1>Мама мыла раму</h1>")