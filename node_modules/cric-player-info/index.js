

var cheerio = require('cheerio')
var request = require('request')
var index = require('./playerIndex')


var searchByPlayerName = function (searchTerm) {
	return new Promise((resolve, rejects) => {
		playerId = index.filter((player) => {
			return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
		})[0].playerId;
		getPlayerData(playerId, false).then((res) => {
			return resolve(res)
		});
	});
}

var searchSummaryByPlayerName = function (searchTerm) {
	return new Promise((resolve, rejects) => {
		playerId = index.filter((player) => {
			return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
		})[0].playerId;
		getPlayerData(playerId, true).then((res) => {
			return resolve(res)
		});
	});
}


var searchMultipleByPlayersName = function (searchTerm, searchLimit = 3) {

	var playersList = [];
	return new Promise((resolve, rejects) => {
		var players = index.filter((player) => {
			players
			return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
		});
		players = players.length > searchLimit ? players.slice(0, searchLimit) : players;
		var fetchRecursiveData = function (players) {

			getPlayerData((players.pop()).playerId, false).then((res) => {
				playersList.push(res);
				if (players.length == 0) {
					return resolve(playersList);

				} else {
					fetchRecursiveData(players);
				}
			});
		}
		fetchRecursiveData(players);


	});
}
var getPlayerData = function (playerId, summary) {
	return new Promise((resolve, rejects) => {


		var playerData = {
			'id': playerId
		};
		request({
			uri: "https://www.cricbuzz.com/profiles/" + playerId + "/",
		}, function (error, response, body) {

			var $ = cheerio.load(body);
			var imgLink = '';
			var name = '';
			playerData = parsePlayerSummary($, playerData);
			if (!summary)
				playerData = parsePlayerStats($, playerData);
			return resolve(playerData);
		});

	});
}


var parsePlayerSummary = function ($, playerData) {
	$("h1").each(function () {
		var link = $(this);


		playerData.name = link.text();

	});
	$("h3").each(function () {
		var link = $(this);


		playerData.country = link.text();
		//console .log('country->'+country);
	});
	// $(".cb-text-link").each(function() {
	//     var link = $(this);


	//         var country=link.text();
	//         console.log('info->'+country);
	//   });
	var data = $(".cb-col.cb-col-60.cb-lst-itm-sm");
	playerData.dateOfBirth = $(data[0]).text();
	playerData.birthPlace = $(data[1]).text();
	playerData.role = $(data[2]).text();
	playerData.battingStyle = $(data[3]).text();
	playerData.bowlingStyle = $(data[4]).text();
	playerData.teams = $(data[5]).text();

	var rankData = $(".cb-col.cb-col-25.cb-plyr-rank.text-right")
	playerData.iccBattingTestRank = $(rankData[3]).text();
	playerData.iccBattingOdiRank = $(rankData[4]).text();
	playerData.iccBattingT20Rank = $(rankData[5]).text();
	playerData.iccBowlingTestRank = $(rankData[6]).text();
	playerData.iccBowlingOdiRank = $(rankData[7]).text();
	playerData.iccBowlingT20Rank = $(rankData[8]).text();

	var careerInfo = $(".cb-text-link")
	playerData.testDebut = $(careerInfo[2]).text();
	playerData.lastTest = $(careerInfo[3]).text();
	playerData.odiDebut = $(careerInfo[4]).text();
	playerData.lastOdi = $(careerInfo[5]).text();
	playerData.t20iDebut = $(careerInfo[6]).text();
	playerData.lastT20i = $(careerInfo[7]).text();
	playerData.iplDebut = $(careerInfo[8]).text();
	playerData.lastIpl = $(careerInfo[9]).text();

	return playerData;
}
var parsePlayerStats = function ($, playerData) {
	var stats = $("td.text-right");
	playerData.batting_test_matches = $(stats[0]).text();
	playerData.batting_test_innings = $(stats[1]).text();
	playerData.batting_test_notouts = $(stats[2]).text();
	playerData.batting_test_runs = $(stats[3]).text();
	playerData.batting_test_highScore = $(stats[4]).text();
	playerData.batting_test_average = $(stats[5]).text();
	playerData.batting_test_bf = $(stats[6]).text();
	playerData.batting_test_strikeRate = $(stats[7]).text();
	playerData.batting_test_hundreds = $(stats[8]).text();
	playerData.batting_test_doubleHundreds = $(stats[9]).text();
	playerData.batting_test_fifties = $(stats[10]).text();
	playerData.batting_test_fours = $(stats[11]).text();
	playerData.batting_test_sixes = $(stats[12]).text();


	playerData.batting_odi_matches = $(stats[13]).text();
	playerData.batting_odi_innings = $(stats[4]).text();
	playerData.batting_odi_notouts = $(stats[15]).text();
	playerData.batting_odi_runs = $(stats[16]).text();
	playerData.batting_odi_highScore = $(stats[17]).text();
	playerData.batting_odi_average = $(stats[18]).text();
	playerData.batting_odi_bf = $(stats[19]).text();
	playerData.batting_odi_strikeRate = $(stats[20]).text();
	playerData.batting_odi_hundreds = $(stats[21]).text();
	playerData.batting_odi_doubleHundreds = $(stats[22]).text();
	playerData.batting_odi_fifties = $(stats[23]).text();
	playerData.batting_odi_fours = $(stats[24]).text();
	playerData.batting_odi_sixes = $(stats[25]).text();

	playerData.batting_t20i_matches = $(stats[26]).text();
	playerData.batting_t20i_innings = $(stats[27]).text();
	playerData.batting_t20i_notouts = $(stats[28]).text();
	playerData.batting_t20i_runs = $(stats[29]).text();
	playerData.batting_t20i_highScore = $(stats[30]).text();
	playerData.batting_t20i_average = $(stats[31]).text();
	playerData.batting_t20i_bf = $(stats[32]).text();
	playerData.batting_t20i_strikeRate = $(stats[33]).text();
	playerData.batting_t20i_hundreds = $(stats[34]).text();
	playerData.batting_t20i_doubleHundreds = $(stats[35]).text();
	playerData.batting_t20i_fifties = $(stats[36]).text();
	playerData.batting_t20i_fours = $(stats[37]).text();
	playerData.batting_t20i_sixes = $(stats[38]).text();

	playerData.batting_ipl_matches = $(stats[39]).text();
	playerData.batting_ipl_innings = $(stats[40]).text();
	playerData.batting_ipl_notouts = $(stats[41]).text();
	playerData.batting_ipl_runs = $(stats[42]).text();
	playerData.batting_ipl_highScore = $(stats[43]).text();
	playerData.batting_ipl_average = $(stats[44]).text();
	playerData.batting_ipl_bf = $(stats[45]).text();
	playerData.batting_ipl_strikeRate = $(stats[46]).text();
	playerData.batting_ipl_hundreds = $(stats[47]).text();
	playerData.batting_ipl_doubleHundreds = $(stats[48]).text();
	playerData.batting_ipl_fifties = $(stats[49]).text();
	playerData.batting_ipl_fours = $(stats[50]).text();
	playerData.batting_ipl_sixes = $(stats[51]).text();


	playerData.bowling_test_matches = $(stats[51]).text();
	playerData.bowling_test_innings = $(stats[52]).text();
	playerData.bowling_test_ballsBowled = $(stats[53]).text();
	playerData.bowling_test_runs = $(stats[54]).text();
	playerData.bowling_test_wickets = $(stats[55]).text();
	playerData.bowling_test_bestBowlinginInnings = $(stats[56]).text();
	playerData.bowling_test_bestBowlinginMatch = $(stats[57]).text();
	playerData.bowling_test_economy = $(stats[58]).text();
	playerData.bowling_test_average = $(stats[59]).text();
	playerData.bowling_test_strikeRate = $(stats[60]).text();
	playerData.bowling_test_fiveWickets = $(stats[61]).text();
	playerData.bowling_test_tenWickets = $(stats[62]).text();

	playerData.bowling_odi_matches = $(stats[63]).text();
	playerData.bowling_odi_innings = $(stats[64]).text();
	playerData.bowling_odi_ballsBowled = $(stats[65]).text();
	playerData.bowling_odi_runs = $(stats[66]).text();
	playerData.bowling_odi_wickets = $(stats[67]).text();
	playerData.bowling_odi_bestBowlinginInnings = $(stats[68]).text();
	playerData.bowling_odi_bestBowlinginMatch = $(stats[69]).text();
	playerData.bowling_odi_economy = $(stats[70]).text();
	playerData.bowling_odi_average = $(stats[71]).text();
	playerData.bowling_odi_strikeRate = $(stats[72]).text();
	playerData.bowling_odi_fiveWickets = $(stats[73]).text();
	playerData.bowling_odi_tenWickets = $(stats[74]).text();

	playerData.bowling_t20i_matches = $(stats[75]).text();
	playerData.bowling_t20i_innings = $(stats[76]).text();
	playerData.bowling_t20i_ballsBowled = $(stats[77]).text();
	playerData.bowling_t20i_runs = $(stats[78]).text();
	playerData.bowling_t20i_wickets = $(stats[79]).text();
	playerData.bowling_t20i_bestBowlinginInnings = $(stats[80]).text();
	playerData.bowling_t20i_bestBowlinginMatch = $(stats[81]).text();
	playerData.bowling_t20i_economy = $(stats[82]).text();
	playerData.bowling_t20i_average = $(stats[83]).text();
	playerData.bowling_t20i_strikeRate = $(stats[84]).text();
	playerData.bowling_t20i_fiveWickets = $(stats[85]).text();
	playerData.bowling_t20i_tenWickets = $(stats[86]).text();

	playerData.bowling_ipl_matches = $(stats[87]).text();
	playerData.bowling_ipl_innings = $(stats[88]).text();
	playerData.bowling_ipl_ballsBowled = $(stats[89]).text();
	playerData.bowling_ipl_runs = $(stats[90]).text();
	playerData.bowling_ipl_wickets = $(stats[91]).text();
	playerData.bowling_ipl_bestBowlinginInnings = $(stats[92]).text();
	playerData.bowling_ipl_bestBowlinginMatch = $(stats[93]).text();
	playerData.bowling_ipl_economy = $(stats[94]).text();
	playerData.bowling_ipl_average = $(stats[95]).text();
	playerData.bowling_ipl_strikeRate = $(stats[96]).text();
	playerData.bowling_ipl_fiveWickets = $(stats[97]).text();
	playerData.bowling_ipl_tenWickets = $(stats[98]).text();
	return playerData;

}


var getMatchingPlayers = function (searchTerm, searchLimit) {
	return new Promise((resolve, rejects) => {
		var players = index.filter((player) => {
			players
			return player.playerName.toLowerCase().includes(searchTerm.toLowerCase());
		});
		players = players.length > searchLimit ? players.slice(0, searchLimit) : players;
		return resolve(players);
	});

}

var searchMatchingPlayerNames = function (searchTerm, searchLimit) {
	return new Promise((resolve, rejects) => {
		getMatchingPlayers(searchTerm, searchLimit).then((res) => {
			return resolve(res.map((player) => {
				return player.playerName;
			}));
		});
	});
}


var cricData = {
	getPlayerSummaryByName: searchSummaryByPlayerName,
	getPlayerInfoByName: searchByPlayerName,
	getMatchingPlayerNames: searchMatchingPlayerNames,
	getMatchingPlayerInfo: searchMultipleByPlayersName,

}
module.exports = cricData;

