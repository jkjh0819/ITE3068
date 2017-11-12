var chart = bb.generate({
  "data": {
    "type": "line",
    "xs": {
      "male": "x1",
      "female": "x2"
    },
    "columns": [
    	["x1", 0, 10, 20, 30, 40, 50, 60, 70, 80],
    	["x2", 0, 10, 20, 30, 40, 50, 60],
    	["male", 41, 88, 83, 79, 79, 87, 87, 100, 0],
    	["female", 37, 24, 28, 17, 31, 11, 0]
    ],
    "labels": {
      "position": {
        "x": 0,
        "y": 4
      }
    }
  },

  "subchart": {
    "show": true
  },

  "axis": {
    "y": {
      "min" : 10,
      "max" : 90,
      "tick": {
        "format": function (x) {
          return x + "%";
        }
      }
    }
  },
  "bindto": "#chart"
});
