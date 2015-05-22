var res = "";
var userInput = "";
var left = "";
var right = "";
var divide = '\&divide;)';

$(document).ready(function() {
    	$("span").not("#calc").not("#cancel").click(function(event){
    	    var screenInput = $(this).html();
    	    var screenInit = $("#screen").html();
    	    $("#screen").html(screenInit + screenInput);
    	});

    	$("#cancel").click(function(event){
    		$("#screen").html("");
    	});

    	$("#calc").click(function(event){
    		userInput = $("#screen").html();
    		for(var i = 0; i < userInput.length; i++) {
    		if (userInput[i] === "+"){
						left = userInput.slice(0,i);
						right = userInput.slice((i+1), userInput.length);
						$("#screen").html(parseInt(left) + parseInt(right));

					}
			else if (userInput[i] === "-"){
						left = userInput.slice(0,i);
						right = userInput.slice((i+1), userInput.length);
						$("#screen").html(parseInt(left) - parseInt(right));

					}
			else if (userInput[i] === "x") {
						left = userInput.slice(0,i);
						right = userInput.slice((i+1), userInput.length);
						$("#screen").html(parseInt(left) * parseInt(right));

					}
			else if (userInput[i] === "/") {
						left = userInput.slice(0,i);
						right = userInput.slice((i+1), userInput.length);
						$("#screen").html(parseFloat(left)/parseFloat(right));

					}

			}
    	});


// function lR() {
// 		res.concat(userInput); 
// 				for(var i = 0; i < res.length; i++) {
// 					var left = "";
// 					var right = "";
// 					if ((res[i] = "+") || (res[i] = "-") || (res[i] = "x") || (res[i] = "&divide;")){
// 						left = slice.res[0,i];
// 						right = slice.res[(i+1), res.length-1];
// 					}
// 					console.log(left);
// 					console.log(right);
// 				}
// 			}
// console.log(lR());
console.log('&divide;');
});



//     	$(".operator").click(function(event){
//     		if ($(this).html() === &divide;) {

//     		}
//     	})



// function calc(x,y) {
// 	add: function(x,y){
// 		alert(x+y);
// 	},
// 	subtract: function(x,y) {
// 		alert(x-y);
// 	},
// 	divide: function(x,y) {
// 		alert(x/y);
// 	},
// 	multiply: function(x,y) {
// 		alert(x*y);
// 	}
// }; 
