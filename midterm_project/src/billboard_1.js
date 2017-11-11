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

	var chart = bb.generate({
		"data": {
			"columns":[
				[data[0].key, data[0].value],
				[data[1].key, data[1].value],
				[data[2].key, data[2].value],
			],
			"type": "pie",
		},	
		"bindto": "#chart",
	});
});