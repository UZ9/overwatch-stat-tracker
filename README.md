## Installation
    npm install requestify
## Usage
Overwatch-stat-tracker allows a super easy way of getting stats from any battletag. To start, require the module and call the request method:
``` javascript
var owTracker = require("overwatch-stat-tracker");
```
Method example:

``` javascript
owTracker.fetchStats("pc", "us", "Innox-1937")
```
Return:
``` javascript
{ competitiveStats: {},
  endorsement: 1,
  endorsementIcon:
   'https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_1',
  gamesWon: 0,
  icon:
   'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d8ada4ce47d3de34d270776a11f6f75a93aa648d7f86d2e31095b5360be358a5.png',
  level: 63,
  levelIcon:
   'https://d15f34w2p8l1cc.cloudfront.net/overwatch/e8b7df4b88998380658d49d00e7bc483c740432ac417218e94fab4137bec4ae0.png',
  name: 'Innox#1937',
  prestige: 0,
  prestigeIcon: '',
  private: true,
  quickPlayStats: {},
  rating: 0,
  ratingIcon: '',
  ratings: null 
}
```

Parameters:
`platform` - The platform the player is on (i.e. 'pc')
`country` - the country the player is from (i.e. 'us')
`battletag` - The battletag of the user with a dash between the digits and tha name (i.e. 'Innox-1937')

    