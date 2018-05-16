# Dublin Bus - RTPI Javascript Client

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c821ea2af7074f1a87788adf36eab848)](https://www.codacy.com/app/adamisntdead/DublinBus?utm_source=github.com&utm_medium=referral&utm_content=adamisntdead/DublinBus&utm_campaign=badger)

![Dublin Bus Logo](https://upload.wikimedia.org/wikipedia/de/thumb/b/b2/Dublin-bus.svg/2000px-Dublin-bus.svg.png)

## About This
This module gets realtime
and stop information from the
[Dublin Bus REST API](https://data.gov.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail).
It's really simple to use just look at the examples.

Any bug reports / pull requests are welcome, just follow the contributing guide (At the end of this).

## Usage Guide / Examples
You have to install the module before you can use it:
```bash
npm install --save dublinbusjs
```

Now this exposes two functions, _getStopData()_ and _getRealtimeData()_.

```javascript
const dublinBus = require('dublinbusjs');

dublinBus.getStopData(3787).then(console.log).catch(console.error)

/* Prints:
{
	"stopid": "3787",
	"displaystopid": "3787",
	"shortname": "Skerries Road",
	"shortnamelocalized": "Bóthar na Sceirí",
	"fullname": "Skerries Road",
	"fullnamelocalized": "",
	"latitude": "53.54684889",
	"longitude": "-6.101198889",
	"lastupdated": "12/12/2016 09:03:15",
	"operators": [
		{
			"name": "bac",
			"routes": [
				"33",
				"33X",
				"33A"
			]
		}
	]
}
*/

dublinBus.getRealtimeData(7602).then(console.log).catch(console.error)

/* Prints:
[
	{
		"arrivaldatetime": "14/01/2017 13:16:27",
		"duetime": "43",
		"departuredatetime": "14/01/2017 13:16:27",
		"departureduetime": "43",
		"scheduledarrivaldatetime": "14/01/2017 13:21:00",
		"scheduleddeparturedatetime": "14/01/2017 13:21:00",
		"destination": "Balbriggan",
		"destinationlocalized": "Baile Brigín",
		"origin": "Abbey St",
		"originlocalized": "Sr. na Mainistreach",
		"direction": "Outbound",
		"operator": "bac",
		"additionalinformation": "",
		"lowfloorstatus": "no",
		"route": "33",
		"sourcetimestamp": "14/01/2017 12:16:31",
		"monitored": "true"
	}
]
*/

```

## Contributing
All bug reports and pull requests are welcome!
If you wish to add something, make a fix or make a change, just:

* Fork this repo
* Add a branch
* Make your changes
* Send a pull request!

Make sure to make your changes in the 'src' directory, and run `gulp` when your finished so it will build!
