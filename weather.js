var day1;
var day2;
var day3;
var day4;
var day5;
var url;
var val;
var loc;
var query;

//var zipcode = prompt("Please enter your zipcode", "30030");
//var zipcode = prompt("please enter city, ST","atlanta ,ga");
function load(){
	var text ='<form name="form1" >' +"
		'<input id="answer" type="text" name="name">' +
		'<input type="submit" value="submit">' +
		'</form>';
	document.getElementById("search").innerHTML = text;
	val = document.getElementById("answer").name;
	loc = val; 
	query = " * from weather.forecast where woeid in (select woeid from geo.places(1) where text='atlanta ,ga' ";
	url = 'http://query.yahooapis.com/v1/public/yql?q=select' + encodeURIComponent(query) + ')&format=json&callback=callbackFunction';
	return val;
	}
function dat(){
	
	if (val != null) {
    document.getElementById("demo").innerHTML =
    "Your Forecast for " + val + "!";
}
    document.getElementById("day1").innerHTML =
	"Today is " + day1[0] + ", " + day1[1] + ", " + day1[4] +" with a high of " + day1[2] + " and a low of " + day1[3] + " " ;
}

var callbackFunction = function(data) {
    var fore = data.query.results.channel.item.forecast;
		
		day1 = [fore[0].day, fore[0].date, fore[0].high, fore[0].low, fore[0].text, fore[0].code];
		day2 = [fore[1].day, fore[1].date, fore[1].high, fore[1].low, fore[1].text, fore[1].code];
		day3 = [fore[2].day, fore[2].date, fore[2].high, fore[2].low, fore[2].text, fore[2].code];
		day4 = [fore[3].day, fore[3].date, fore[3].high, fore[3].low, fore[3].text, fore[3].code];
		day5 = [fore[4].day, fore[4].date, fore[4].high, fore[4].low, fore[4].text, fore[4].code];
		
		
  };

/*SAMPLE DATASET VALUES " + loc + "
forecast": [
      {
       "code": "26",
       "date": "15 Feb 2018",
       "day": "Thu",
       "high": "24",
       "low": "21",
       "text": "Cloudy"
      },
	  
code:
	0 	tornado
	1 	tropical storm
	2 	hurricane
	3 	severe thunderstorms
	4 	thunderstorms
	5 	mixed rain and snow
	6 	mixed rain and sleet
	7 	mixed snow and sleet
	8 	freezing drizzle
	9 	drizzle
	10 	freezing rain
	11 	showers
	12 	showers
	13 	snow flurries
	14 	light snow showers
	15 	blowing snow
	16 	snow
	17 	hail
	18 	sleet
	19 	dust
	20 	foggy
	21 	haze
	22 	smoky
	23 	blustery
	24 	windy
	25 	cold
	26 	cloudy
	27 	mostly cloudy (night)
	28 	mostly cloudy (day)
	29 	partly cloudy (night)
	30 	partly cloudy (day)
	31 	clear (night)
	32 	sunny
	33 	fair (night)
	34 	fair (day)
	35 	mixed rain and hail
	36 	hot
	37 	isolated thunderstorms
	38 	scattered thunderstorms
	39 	scattered thunderstorms
	40 	scattered showers
	41 	heavy snow
	42 	scattered snow showers
	43 	heavy snow
	44 	partly cloudy
	45 	thundershowers
	46 	snow showers
	47 	isolated thundershowers
	3200 	not available
	  */