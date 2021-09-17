// TODO: load the dataset 

let attractions;
fetch(./attractions.json)
  .then(response => response.json())
  .then(data => {
		attractions = data;
		filterData("all");
 

function filterData(category) {
	//filters the top 5
	console.log(category)
	//base case for when you first open the website
	if (category == "all"){
		attractions.sort((firstItem, secondItem) => secondItem.Visitors - firstItem.Visitors);
    	data = attractions.slice(0,5);
    	console.log(data)
		renderBarChart(data);
	}
	//else filter by the selected category
	else{
	let filter = attractions
	.filter(d =>
		{
		return d.Category == category} 
		)
	
    attractions.sort((firstItem, secondItem) => secondItem.Visitors - firstItem.Visitors);
    data = filter.slice(0,5);
	renderBarChart(data);

		}
	/* **************************************************
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 * **************************************************/
		
}
  
// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
document.querySelector("#attraction-category").addEventListener("change", function(category){
	filterData(category.target.value);
	
})

  });
