var numofsq = 6;
var colors = generateRandomColors(numofsq);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var resetButton = document.querySelector("#reset");
easybtn.addEventListener("click",function(){
	  hardbtn.classList.remove("selected");
	  easybtn.classList.add("selected");
	  numofsq=3;
	  colors=generateRandomColors(numofsq);
	  pickedColor = pickColor();
	  for(var i = 0 ; i < squares.length ; i ++ )
	  {
	  	if(colors[i]){
	  	squares[i].style.backgroundColor = colors[i];
		  }
		  else{
		  	squares[i].style.display = "none";
		  }


	  }

});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numofsq=6;
    colors=generateRandomColors(numofsq);
	  pickedColor = pickColor();
	  for(var i = 0 ; i < squares.length ; i ++ )
	  {
	  	
	  	squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	  }
});

var messageDisplay = document.querySelector("#message");
	resetButton.addEventListener("click",function(){
	  colors =  generateRandomColors(numofsq);
	  pickedColor = pickColor();
	  colorDisplay.textContent = pickedColor;
	  this.textContent="New Colors"
	  messageDisplay.textContent = " ";

	  for(var i = 0; i < squares.length;i++ ){
	  	squares[i].style.backgroundColor = colors[i];
	  	h1.style.backgroundColor = "steelblue";
	  }

	});
for(var i = 0; i < squares.length;i++ )
{
  squares[i].style.backgroundColor = colors[i];
  //adding click listeners
  squares[i].addEventListener("click",function(){
    //grab color of clicked and compare to picked color 
   var clickedColor= this.style.backgroundColor;
	   if(clickedColor===pickedColor){
	   
	   	messageDisplay.textContent = "Correct";
	   	changeColors(pickedColor);
	   	h1.style.backgroundColor= clickedColor;
	   	resetButton.textContent = "Play Again?";

	   }
	   else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "try again";


		}
   
  });


 var colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.textContent = pickedColor; 

}
	function changeColors(color)
	{

		 for (var i =0 ; i < squares.length;i++)
		 {
		 	squares[i].style.backgroundColor = color;
		 }
	}


	function pickColor()
	{
	  var random =Math.floor(Math.random() * colors.length);
      return colors[random];

	}

   function generateRandomColors(num)
   {
     var arr =[];
	for(var i =0 ; i < num ; i++)
	{
       arr.push(randomColor());

	}

     return arr;
   }

   function randomColor()
   {
     var red = Math.floor(Math.random() *256); 
     var green = Math.floor(Math.random() *256); 
     var blue = Math.floor(Math.random() *256); 
      return "rgb(" + red + "," + " " + green + "," +" " + blue + ")"; 
   }


