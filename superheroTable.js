var superheroes = [{
  Name: "Incredible Hulk",
  Color: "Green",
  Superpower: "Strength"
}, {
  Name: "Superman",
  Color: "Blue",
  Superpower: "Flying"
}, {
  Name: "Hawkeye",
  Color: "Purple",
  Superpower: "Archery"
}];


function printTable(hero){
  var report="";
  report+="<table>";
  report+="<thead><tr><th>Name</th>";
  report+="<th>Superpower</th>";
  report+="<th>Color</th></thead></tr>";
    for (var i=0; i<superheroes.length;i+=1) {
  report +=  '<td>'+superheroes[i].Name+'</td>';
  report +='<td>  '+superheroes[i].Color+'</td>';
  report +='<td>  '+superheroes[i].Superpower+'</td></tr>'; 

     }
  report+="</table>";
  alert(report);
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = report;
  }