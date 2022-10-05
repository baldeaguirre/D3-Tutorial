// d3.select("body").append("p").text("New paragraph!");
// var dataset = [];  						 //Initialize empty array
// for (var i = 0; i < 25; i++) {			 //Loop 25 times
// 	var newNumber = Math.round(Math.random() * 30);  //New random number (0-30)
// 	dataset = dataset.concat(newNumber); //Add new number to array
// }

// d3.select("body").selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar")
//   // .classed("bar", true);
//   .style("height", function(d) {
//     var barHeight = d * 5;  //Incrementar la escala 5 veces.
//     return barHeight + "px";
//   });

// //Width and height
// var w = 500;
// var h = 50;

// //Data
// var dataset = [ 5, 10, 15, 20, 25 ];

// //Create SVG element
// var svg = d3.select("body")
// 			.append("svg")
// 			.attr("width", 500)
// 			.attr("height", 50);

// var circles = svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle");

// circles.attr("cx", function(d, i) {
// 			return (i * 50) + 25;
// 		  })
// 	     .attr("cy", h/2)
// 	     .attr("r", function(d) {
// 			return d;
// 	    })
//        .attr("fill", "blue")
//        .attr("stroke", "black")
//       //  .attr("stroke-width", function(d) {
//       // return d/2;
//       // });
//        .attr("stroke-width", 2);

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// d3.select("body").selectAll("div")
//   .data(dataset)
//   .enter()
//   .append("div")
//   .attr("class", "bar")
//   .style("height", function(d) {
//     var barHeight = d * 5;
//     return barHeight + "px";
//   });

// d3.select("body").append("p")

//Ancho y Altura
var w = 500;
var h = 100;
var barPadding = 1;

//Creará un elemento SVG 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
  //  .attr("x", function(d, i) {
  //   return i * 21;  //Ancho de barras de 20 más 1 espacio
  //   })
    .attr("x", function(d, i) {
    return i * (w / dataset.length);
    })
    .attr("y", function(d) {
    return h - (d * 4);  //Altura menos el dato
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function(d) {
    return d * 4;
    })
    .attr("fill", function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
    return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
    })
    .attr("y", function(d) {
    return h - (d * 4) + 15;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

d3.select("body").append("p")

var dataset2 = [
  [ 5,     20 ],
  [ 480,   90 ],
  [ 250,   50 ],
  [ 100,   33 ],
  [ 330,   95 ],
  [ 410,   12 ],
  [ 475,   44 ],
  [ 25,    67 ],
  [ 85,    21 ],
  [ 220,   88 ]
];

//Crear un elemento SVG
var svg2 = d3.select("body")
             .append("svg")
             .attr("width", w)
             .attr("height", h);

svg2.selectAll("circle")
    .data(dataset2)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return d[0];
      })
    .attr("cy", function(d) {
      return d[1];
      })
    .attr("r", 5)
    // .attr("r", function(d) {
    //   return Math.sqrt(h - d[1]);
    //   });
    .attr("fill", "teal");

svg2.selectAll("text")
   .data(dataset2)
   .enter()
   .append("text")
   .text(function(d) {
    return d[0] + "," + d[1];
    })
   .attr("x", function(d) {
    return d[0];
    })
   .attr("y", function(d) {
    return d[1];
    })
   .attr("font-family", "sans-serif")
   .attr("font-size", "10px")
   .attr("fill", "black");
