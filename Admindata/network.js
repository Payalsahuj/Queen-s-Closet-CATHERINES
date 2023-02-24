let formDataArr = JSON.parse(localStorage.getItem("userform")) || [];
let obj={}
let Arr=[['Country','Popularity']]
formDataArr.map((item)=>{
  if(obj[item.country]==undefined){
      obj[item.country]=1;  
  }
  else{
      obj[item.country]++;
  }
})

for(let key in obj){
  let arr2=[]
  arr2.push(key)
  arr2.push(obj[key])
  Arr.push(arr2)
}
console.log(Arr)
google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(Arr);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}