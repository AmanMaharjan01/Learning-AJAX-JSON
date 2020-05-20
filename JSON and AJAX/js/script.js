
var pc= 1;
var animal = document.getElementById("animal-info");
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
   

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pc + '.json');
ourRequest.onload = function(){
   
   var ourData = JSON.parse(ourRequest.responseText)
    renderHTML(ourData);   

};
ourRequest.send();
  pc++;
  if(pc > 3){
  	document.getElementById('btn').style.display = "none";
  }
});

function renderHTML(data) {

	var htmlString = "";

	for( i=0; i < data.length; i++)
	{
		htmlString += "<p>" + " " + data[i].name + " " + "is a" + " " + data[i].species + "that likes to eat ";
		for(j=0; j< data[i].foods.likes.length; j++)
		{
            if(j == 0)
            {
			htmlString += data[i].foods.likes[j];
		     }
		     else
		     {
		     	htmlString += " and " + data[i].foods.likes[j];
		     }
		}

		htmlString += '</p>';
	}

   animal.insertAdjacentHTML( 'beforeend' , htmlString);

}


