var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://www.filltext.com/?rows=5&pretty=true&name={firstName}&business={business}&phone={phone|format}');
ourRequest.onload = function(){

	 var ourData = JSON.parse(ourRequest.responseText);

	 for(i=0 ; i<ourData.length; i++)
	 {
	 	var data = `
              <tr>
                <td>${ourData[i].name}</td>
                <td>${ourData[i].business}</td>
                <td>${ourData[i].phone}</td>
               </tr>

	 	`
	 	document.getElementById('table-body').innerHTML += data;
	 }
	
};
ourRequest.send();
