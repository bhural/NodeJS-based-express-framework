# cric-player-info

cric-player-info is a node package for getting updated information about cricket players from around the world.

## Installation

Use [npm](https://www.npmjs.com) to install cric-player-info.

```bash
npm install cric-player-info
```

## Usage

#### Import

```js
var cricData= require('cric-player-info');

```
#### Search Players by Name

getMatchingPlayerNames function can be called to get an array of players matching the search keyword.



```js
cricData.getMatchingPlayerNames(searchTerm,[Optional] searchLimit);
```
searchLimit defaults to 3 results.

Example

```js
cricData.getMatchingPlayerNames("Jadeja").then((res)=>
{
    console.log(JSON.stringify(res));
}

//["Ravindra Jadeja","Ajay Jadeja","Rajendra Jadeja","Balkrishna Jadeja",
// "Dharmendrasinh Jadeja","Vishvaraj Jadeja","Hitendra Jadeja ","Dhavalraj 
// Jadeja ","Vihar Jadeja ","shaktisinh jadeja","Hardeep Jadeja"]

```


#### Get Summary Info For a Player by Name

getPlayerSummaryByName function returns a json summary of a player that includes basic information of the player.



```js
cricData.getPlayerSummaryByName(playerName);
```


Example

```js
cricdata.getPlayerSummaryByName('Rahul Dravid').then((res=>{

	console.log(JSON.stringify(res));

}));

// {

// "id": 27,

// "name": "Rahul Dravid",

// "country": "India",

// "dateOfBirth": " Jan 11, 1973 (47 years) ",

// "birthPlace": " Indore, Madhya Pradesh ",

// "role": " Batsman ",

// "battingStyle": " Right Handed Bat ",

// "bowlingStyle": " Right-arm offbreak ",

// "teams": " India, Scotland, Asia XI, ICC World XI, Royal Challengers Bangalore, Rajasthan Royals, Marylebone Cricket Club ",

// "iccBattingTestRank": " -- ",

// "iccBattingOdiRank": " -- ",

// "iccBattingT20Rank": " -- ",

// "iccBowlingTestRank": " -- ",

// "iccBowlingOdiRank": " -- ",

// "iccBowlingT20Rank": " -- ",

// "testDebut": " vs England at Lord's, Jun 20, 1996 ",

// "lastTest": " vs Australia at Adelaide Oval, Jan 24, 2012 ",

// "odiDebut": " vs Sri Lanka at The Padang, Apr 03, 1996 ",

// "lastOdi": " vs England at Sophia Gardens, Sep 16, 2011 ",

// "t20iDebut": " vs England at Emirates Old Trafford, Aug 31, 2011 ",

// "lastT20i": " vs England at Emirates Old Trafford, Aug 31, 2011 ",

// "iplDebut": " vs Kolkata Knight Riders at M.Chinnaswamy Stadium, Apr 18, 2008 ",

// "lastIpl": " vs Mumbai Indians at Eden Gardens, May 24, 2013 "

// }

```

#### Get Detailed Info For a Player by Name

getPlayerSummaryByName function returns a detailed json of a player that includes basic information of the player and his/her statistics.



```js
cricData.getPlayerInfoByName(playerName,);
```


Example

```js
cricdata.getPlayerInfoByName('Brett Lee').then((res=>{

console.log(JSON.stringify(res));

}));

// {

// "id": 42,

// "name": "Brett Lee",

// "country": "Australia",

// "dateOfBirth": " Nov 08, 1976 (43 years) ",

// "birthPlace": " Wollongong, New South Wales ",

// "role": " Bowler ",

// "battingStyle": " Right Handed Bat ",

// "bowlingStyle": " Right-arm fast ",

// "teams": " Australia, Kings XI Punjab, New South Wales, Kolkata Knight Riders, Sydney Sixers, Marylebone Cricket Club, Sydney Thunder, Virgo Super Kings, Ponting XI, Australia Legends ",

// "iccBattingTestRank": " -- ",

// "iccBattingOdiRank": " -- ",

// "iccBattingT20Rank": " -- ",

// "iccBowlingTestRank": " -- ",

// "iccBowlingOdiRank": " -- ",

// "iccBowlingT20Rank": " -- ",

// "testDebut": " vs India at Melbourne Cricket Ground, Dec 26, 1999 ",

// "lastTest": " vs South Africa at Melbourne Cricket Ground, Dec 26, 2008 ",

// "odiDebut": " vs Pakistan at The Gabba, Jan 09, 2000 ",

// "lastOdi": " vs England at Riverside Ground, Jul 07, 2012 ",

// "t20iDebut": " vs New Zealand at Eden Park, Feb 17, 2005 ",

// "lastT20i": " vs West Indies at Kensington Oval, Mar 30, 2012 ",

// "iplDebut": " vs Chennai Super Kings at Punjab Cricket Association IS Bindra Stadium, Apr 19, 2008 ",

// "lastIpl": " vs Delhi Capitals at Shaheed Veer Narayan Singh International Stadium, May 01, 2013 ",

// "batting_test_matches": "76",

// "batting_test_innings": "90",

// "batting_test_notouts": "18",

// "batting_test_runs": "1451",

// "batting_test_highScore": "64",

// "batting_test_average": "20.15",

// "batting_test_bf": "2739",

// "batting_test_strikeRate": "52.98",

// "batting_test_hundreds": "0",

// "batting_test_doubleHundreds": "0",

// "batting_test_fifties": "5",

// "batting_test_fours": "182",

// "batting_test_sixes": "18",

// "batting_odi_matches": "221",

// "batting_odi_innings": "64",

// "batting_odi_notouts": "44",

// "batting_odi_runs": "1176",

// "batting_odi_highScore": "59",

// "batting_odi_average": "17.82",

// "batting_odi_bf": "1407",

// "batting_odi_strikeRate": "83.58",

// "batting_odi_hundreds": "0",

// "batting_odi_doubleHundreds": "0",

// "batting_odi_fifties": "3",

// "batting_odi_fours": "69",

// "batting_odi_sixes": "35",

// "batting_t20i_matches": "25",

// "batting_t20i_innings": "12",

// "batting_t20i_notouts": "6",

// "batting_t20i_runs": "101",

// "batting_t20i_highScore": "43",

// "batting_t20i_average": "16.83",

// "batting_t20i_bf": "71",

// "batting_t20i_strikeRate": "142.25",

// "batting_t20i_hundreds": "0",

// "batting_t20i_doubleHundreds": "0",

// "batting_t20i_fifties": "0",

// "batting_t20i_fours": "9",

// "batting_t20i_sixes": "4",

// "batting_ipl_matches": "38",

// "batting_ipl_innings": "19",

// "batting_ipl_notouts": "9",

// "batting_ipl_runs": "124",

// "batting_ipl_highScore": "25",

// "batting_ipl_average": "12.4",

// "batting_ipl_bf": "97",

// "batting_ipl_strikeRate": "127.84",

// "batting_ipl_hundreds": "0",

// "batting_ipl_doubleHundreds": "0",

// "batting_ipl_fifties": "0",

// "batting_ipl_fours": "8",

// "batting_ipl_sixes": "8",

// "bowling_test_matches": "8",

// "bowling_test_innings": "76",

// "bowling_test_ballsBowled": "150",

// "bowling_test_runs": "16531",

// "bowling_test_wickets": "9554",

// "bowling_test_bestBowlinginInnings": "310",

// "bowling_test_bestBowlinginMatch": "5/30",

// "bowling_test_economy": "9/171",

// "bowling_test_average": "3.47",

// "bowling_test_strikeRate": "30.82",

// "bowling_test_fiveWickets": "53.33",

// "bowling_test_tenWickets": "10",

// "bowling_odi_matches": "0",

// "bowling_odi_innings": "221",

// "bowling_odi_ballsBowled": "217",

// "bowling_odi_runs": "11185",

// "bowling_odi_wickets": "8877",

// "bowling_odi_bestBowlinginInnings": "380",

// "bowling_odi_bestBowlinginMatch": "5/22",

// "bowling_odi_economy": "5/22",

// "bowling_odi_average": "4.76",

// "bowling_odi_strikeRate": "23.36",

// "bowling_odi_fiveWickets": "29.43",

// "bowling_odi_tenWickets": "9",

// "bowling_t20i_matches": "0",

// "bowling_t20i_innings": "25",

// "bowling_t20i_ballsBowled": "25",

// "bowling_t20i_runs": "545",

// "bowling_t20i_wickets": "714",

// "bowling_t20i_bestBowlinginInnings": "28",

// "bowling_t20i_bestBowlinginMatch": "3/23",

// "bowling_t20i_economy": "3/23",

// "bowling_t20i_average": "7.86",

// "bowling_t20i_strikeRate": "25.5",

// "bowling_t20i_fiveWickets": "19.46",

// "bowling_t20i_tenWickets": "0",

// "bowling_ipl_matches": "0",

// "bowling_ipl_innings": "38",

// "bowling_ipl_ballsBowled": "38",

// "bowling_ipl_runs": "875",

// "bowling_ipl_wickets": "1095",

// "bowling_ipl_bestBowlinginInnings": "25",

// "bowling_ipl_bestBowlinginMatch": "3/15",

// "bowling_ipl_economy": "3/15",

// "bowling_ipl_average": "7.51",

// "bowling_ipl_strikeRate": "43.8",

// "bowling_ipl_fiveWickets": "35.0",

// "bowling_ipl_tenWickets": "0"

// }

```

#### Get player information for all matching players

getMatchingPlayerInfo function can array of detailed json objects of players matching the search keyword.



```js
cricData.getMatchingPlayerNames(searchTerm,[Optional] searchLimit);
```
searchLimit defaults to 3 results.

Example

```js
cricData.getMatchingPlayerNames("Jadeja").then((res)=>
{
    console.log(JSON.stringify(res));
}
```
## Contributing
Pull requests a Description
 For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)

## Disclaimer

This is an unofficial package. And it is only for your personal and non-commercial use. You may not use the package for commercial purposes or in any way that is unlawful, or harms us or any other person or entity, as determined in our sole discretion. Package contributors are not responsible for any misuse.
