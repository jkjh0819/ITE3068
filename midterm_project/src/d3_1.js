var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


var percentageFormat = d3.format("%");

var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.value; });

var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.csv("../data/Titanic.csv", function(error, csv_data) {
  if (error) throw error;
 
  var data = d3.nest()
              .key(function(d) {
                  return d.Pclass;
              })
              .rollup(function(d) {
                  return d.length;
              }).entries(csv_data);

          data.forEach(function(d) {
              d.percentage = d.value  / csv_data.length;
          });


  console.log(pie(data))

  var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d, i) { return color(i); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) {
                  console.log("d is", d);
                    return "Class " + d.data.key + " : " + percentageFormat(d.data.percentage);
                });
});
