
// Create 2 datasets

var data1 = [
    {ser1: 1, ser2: 4},
    {ser1: 2, ser2: 16},
    {ser1: 3, ser2: 8},
    {ser1: 8, ser2: 10}
 ];
                                            // //tutaj trzeba dać odnośniki do 
                                            // temp
                                            // predkosc wiatru
                                            // cisnienie
                                            // i ewentualnie event listenery aby zmienialy się dane 
                                            // można z tego skorzystać bo to gotowiec https://www.d3-graph-gallery.com/graph/line_change_data.html
 var data2 = [
    {ser1: 1, ser2: 7},
    {ser1: 4, ser2: 1},
    {ser1: 6, ser2: 8}
 ];
 
 // set the dimensions and margins of the graph
 var margin = {top: 10, right: 30, bottom: 30, left: 50},
     width = 1000 - margin.left - margin.right,
     height = 350;
 
 // append the svg object to the body of the page
 var svg = d3.select("#my_dataviz")
   .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin.left + "," + margin.top + ")");
 
 // Initialise a X axis:
 var x = d3.scaleLinear().range([0,width]);
 var xAxis = d3.axisBottom().scale(x);
 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .attr("class","myXaxis")
 
 // Initialize an Y axis
 var y = d3.scaleLinear().range([height, 0]);
 var yAxis = d3.axisLeft().scale(y);
 svg.append("g")
   .attr("class","myYaxis")
 
 // Create a function that takes a dataset as input and update the plot:
 function update(data) {

   // Create the X axis:
   const hoursArray = [];
   const hours = document.querySelectorAll('.forecast-hour');
   hours.forEach(element => hoursArray.push(parseInt(element.textContent)));
   console.log(hoursArray[1].textContent)
   x.domain([0, 10]);
   svg.selectAll(".myXaxis").transition()
     .duration(3000)
     .call(xAxis);
                                                // tutaj w create X i Y trzeba dać
                                                // odnośniki do początku i końca układu współrzędnych

   // create the Y axis
   y.domain([0, d3.max(data, function(d) { return d.ser2  }) ]);
   svg.selectAll(".myYaxis")
     .transition()
     .duration(3000)
     .call(yAxis);
 
   // Create a update selection: bind to the new data
   var u = svg.selectAll(".lineTest")
     .data([data], function(d){ return d.ser1 });
 
   // Updata the line
   u
     .enter()
     .append("path")
     .attr("class","lineTest")
     .merge(u)
     .transition()
     .duration(3000)
     .attr("d", d3.line()
       .x(function(d) { return x(d.ser1); })
       .y(function(d) { return y(d.ser2); }))
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("stroke-width", 2.5)
 }
 
 // At the beginning, I run the update function on the first dataset:
 update(data1)
 