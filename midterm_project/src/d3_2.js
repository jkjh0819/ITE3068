var initStackedBarChart = {
  draw: function(config) {
    me = this,
    stackKey = config.key,
    data = config.data,
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    xScale = d3.scaleBand().range([0, width]).padding(0.5),
    yScale = d3.scaleLinear().range([height, 0]),
    color = ["#2d54e1", "#d25c4d"],
    xAxis = d3.axisBottom(xScale),
    yAxis =  d3.axisLeft(yScale),
    svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right + 80)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var stack = d3.stack()
      .keys(stackKey)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
  
    var layers= stack(data);
      xScale.domain(data.map(function(d) { return d.Embarked; }));
      yScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();

    var layer = svg.selectAll(".layer")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { return color[i]; });

      layer.selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d) { return xScale(d.data.Embarked); })
        .attr("y", function(d) { return yScale(d[1]); })
        .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
        .attr("width", xScale.bandwidth());
        
      svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (height+5) + ")")
      .call(xAxis);

      svg.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", "translate(0,0)")
      .call(yAxis);

    var legend = svg.selectAll(".legend")
      .data(color)
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
     
      legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", function(d, i) {return color.slice().reverse()[i];});
     
      legend.append("text")
      .attr("x", width + 5)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(function(d, i) { 
        switch (i) {
          case 0: return "male";
          case 1: return "female";
        }

    });
  }
}
var data = [{"Embarked":"Southampton","male":364,"female":63},
            {"Embarked":"Cherbourg","male":66,"female":9},
            {"Embarked":"Queenstown","male":38,"female":9}];

var key = ["male", "female"];

initStackedBarChart.draw({
  data: data,
  key: key,
});




