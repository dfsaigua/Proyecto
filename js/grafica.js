
function type(d) {
  d.population = +d.population;
  return d;}

$(document).ready(function()
{
	var width = $('#grafico').width(),
    height = $('#grafico').height(),
    radius = Math.min(width, height) / 2;

	var color = d3.scale.ordinal().range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#17becf", "#bcbd22"]);

	var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 100);
	var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.population; });

	var svg = d3.select('#grafico').append("svg")
    .attr("width", width)
    .attr("height", height)
  	.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	d3.csv("data/data.csv", type, function(error, data) {
		if (error) throw error;
		var g = svg.selectAll(".arc")
      	.data(pie(data))
    	.enter().append("g")
      	.attr("class", "arc");

  		g.append("path")
      	.attr("d", arc)
      	.style("fill", function(d) { return color(d.data.age); });

  		g.append("text")
      	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      	.attr("dy", ".35em")
      	.text(function(d) { return d.data.age; });
      });

})