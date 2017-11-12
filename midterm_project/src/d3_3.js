 var svg = d3.select("#chart").append("svg")
      .attr("width", 960)
      .attr("height", 300)

var margin = {left:40, right:30, top: 10, bottom: 20}
var width = svg.attr("width") - margin.left - margin.right;
var height = svg.attr("height") - margin.bottom - margin.top;

var data = [{"ages":"0", "female": 0.37, "male": 0.41},
            {"ages":"10", "female": 0.24, "male": 0.88},
            {"ages":"20", "female": 0.28, "male": 0.83},
            {"ages":"30", "female": 0.17, "male": 0.79},
            {"ages":"40", "female": 0.31, "male": 0.79},
            {"ages":"50", "female": 0.11, "male": 0.87},
            {"ages":"60", "female": 0, "male": 0.87},
            {"ages":"70", "female": 0, "male": 1.00},
            {"ages":"80", "female": 0, "male": 0},
           ];

var x = d3.scaleLinear()
  .rangeRound([0,width]);

var y = d3.scaleLinear()
  .rangeRound([height, 0]);

x.domain(d3.extent(data, function(d) { return d.ages; }));
y.domain([0, 
          d3.max(data, function(d) { 
            return d3.max([d.female, d.male]);
          })]);

var multiline = function(category) {
  var line = d3.line()
              .x(function(d) { return x(d.ages); })
              .y(function(d) { return y(d[category]); });
  return line;
}

var line = d3.line()
  .x(function(d) { return x(d.ages); })
  .y(function(d) { return y(d); }); 

var categories = ['female', 'male'];
var color = d3.scaleOrdinal(d3.schemeCategory10);

var g = svg.append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

for (i in categories) {
  var lineFunction = multiline(categories[i]);
  g.append("path")
    .datum(data) 
    .attr("class", "line")
    .style("stroke", color(i))
    .attr("d", lineFunction);
}

  // Add the X Axis
  g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

  // Add the Y Axis
  g.append("g")
  .call(d3.axisLeft(y)
          .tickFormat(d3.format(".0%")));
