/*Sources:
TA: Tiffany Wun
http://zeroviscosity.com/d3-js-step-by-step/step-3-adding-a-legend
http://bl.ocks.org/weiglemc/6185069
http://bl.ocks.org/biovisualize/1016860
*/

var border=1;
var bordercolor='black';
		
		
var svg = d3.select("svg"),
margin = {top:20, right:30, bottom: 30, left: 80},
width = +svg.attr("width") - margin.left - margin.right, 
height = +svg.attr("height") - margin.top - margin.bottom;
		
		
var borderPath = svg.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("height", 740)
.attr("width", 1500)
.attr("fill", "#a3c2c2")
.style("stroke", bordercolor)
.style("stroke-width", border);

				
var g = svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
				
var x = d3.scaleBand().range([0, width]).padding(0.4), 
y = d3.scaleLinear().rangeRound([height, 0]);

//range for colors associated with domain
var colorRange = ["#ff3300", "#ff6600" , "#ff6699",
"#cc33ff", "#ffcc99", "#6600ff", "#993366", 
"#0000ff", "#00ccff", "#00ffcc","#00cc00",
"#669900", "#ccff33", "#ffff00","#cc0066"];

//list for domain
var SitDomain = ["Talk", "Run", "Kiss", "Write", "Eat", "Sleep","Mumble", "Read", "Fight", "Belch", "Argue", "Jump", 
"Cry", "Laugh", "Shout"];

//setting up tooltip 	
var tooltip = d3.select("body")
.append("div")
.style("position", "absolute")

//mapping a behavior to a color
var color = d3.scaleOrdinal()
  .domain(SitDomain)  
  .range(colorRange); 

 // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(" + i * 60 + ")"; });

  // draw circles for legend
  legend.append("circle")
      .attr("cx", 500)
	  .attr("cy", 20)
      .attr("r", 6)
     
      .style("fill", color);

  // draw text for legend
  legend.append("text")
      .attr("x", 520)
      .attr("y", 40)
      .style("text-anchor", "end")
      .text(function(data) { return data;})




	
			
			
