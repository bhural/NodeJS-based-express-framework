import fetch from 'node-fetch'
import express from 'express';
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/HomePage', (req, res) => {
    fetch('https://api.cricapi.com/v1/cricScore?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757')
        .then(res => res.json())
        .then(json => {
            let d = json.data
            console.log(d)
            res.render('cric', {info:d});
        })
})
app.get('/ScoreBoard', (req, res) => {
    fetch('https://api.cricapi.com/v1/cricScore?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757')
        .then(res => res.json())
        .then(json => {
            let d = json.data
            console.log(d)
            res.render('Sboard', {info:d});
        })
})
app.get('/SeriesInfo', (req, res) => {
    fetch('https://api.cricapi.com/v1/series?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757&offset=0')
        .then(res => res.json())
        .then(json => {
            let d = json.data
            res.render('series', {info:d});
        })
    
})
app.get('/Teams', (req, res) => {
    fetch('https://api.cricapi.com/v1/countries?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757&offset=0')
        .then(res => res.json())
        .then(json => {
            let d = json.data
            res.render('Teams', {info:d});
        })
})
app.get('/SearchPlayer', (req, res) => {
    res.render('cric');
})
//SeriesInfo
app.get('/series', (req, res) => {
    
    fetch('https://api.cricapi.com/v1/series_info?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757&id=f5186e86-297a-4b15-bdb0-79c34a35b3aa')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            res.render('series', {info: json})

        })
       

})

//SearchPlayer
app.get('/Search', (req, res) => {
    
    fetch('https://api.cricapi.com/v1/players?apikey=7a80ed3b-fa25-4bf8-8da0-e0916a818757&offset=0&search='+req.query.name)
        .then(res => res.json())
        .then(json => {
            var str= JSON.stringify(json)
            res.render('player', { info: str })
            // console.log(json);
             
        })
       

})

app.listen(8000, () => {
    console.log("listening port 8000")
})


