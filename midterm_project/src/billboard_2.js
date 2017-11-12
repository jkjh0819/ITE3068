var chart = bb.generate({
    "data": {
    "columns": [
            ["male",364,66,38],
            ["female",63,9,9],
    ],
    "type": "bar",
    "groups": [
      [
        "male",
        "female"
      ]
    ]
  },
  "grid": {
    "y": {
      "lines": [
        {
          "value": 0
        }
      ]
    }
  },

  "axis": {
    "x": {
      "type": "category",
      "categories": [
        "Southampton",
        "Cherbourg",
        "Queenstown",
      ]
    }
  },

  "legend": {
    "position": "right"
  },

  "bindto": "#chart"
});