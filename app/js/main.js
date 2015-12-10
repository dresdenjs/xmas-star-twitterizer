//courtesy of -> https://dillieodigital.wordpress.com/2013/01/16/quick-tip-how-to-draw-a-star-with-svg-and-javascript/
var calculateStarPoints = function (centerX, centerY, arms, outerRadius, innerRadius)
{
  var results = '';

  var angle = Math.PI / arms;

  for (var i = 0; i < 2 * arms; i++)
  {
    // Use outer or inner radius depending on what iteration we are in.
    var r = (i & 1) == 0 ? outerRadius : innerRadius;

    var currX = centerX + Math.cos(i * angle) * r;
    var currY = centerY + Math.sin(i * angle) * r;

    // Our first time we simply append the coordinates, subsequet times
    // we append a ', ' to distinguish each coordinate pair.
    if (i == 0)
    {
      results = currX + ',' + currY;
    }
    else
    {
      results += ', ' + currX + ',' + currY;
    }
  }

  return results;
};

//THANKS MDN
//-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var _redraw = function () {
  _starCounter++;
  //redraw calls the calculate function and sets the center randomly...
  var _centerY = getRandomIntInclusive(10, d3.select('#canvas').attr('height')-10);
  var _centerX = getRandomIntInclusive(10, d3.select('#canvas').attr('width')-10);
  d3.select('#canvas')
    .append('polygon')
    .attr('id', 'star_' + _starCounter)
    .attr('visibility', 'visible')
    .attr('points', window.ddjs.pointFunction(_centerX, _centerY));
};

var _starCounter = 0;
var _pointFn = function (centerX, centerY) {
  return calculateStarPoints(centerX, centerY, 5, 10, 5);
};

var _init = function() {
  console.log('Draw me some attention...');
  _redraw();
};

module.exports = function(ddjs) {
  ddjs.init = _init;
  ddjs.redraw = _redraw;
  ddjs.pointFunction = _pointFn;
  ddjs.calculateStarPoints = calculateStarPoints;

  //short-cuts for uber code...
  ddjs.rd = ddjs.redraw;
  ddjs.pFn = ddjs.pointFunction;
  ddjs.cSPns = ddjs.calculateStarPoints;

};
