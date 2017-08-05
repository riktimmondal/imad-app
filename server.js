var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    var 'article-one' :{
        title:'Article One | Ritkim Mondal',
        heading:'Article One',
        date:'Aug 3,2017',
         content:
        ` <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nisi fugiat magni quos reprehenderit quasi consectetur dolor ex qui sapiente blanditiis similique esse corporis asperiores quibusdam aperiam, eum, sunt officia.</P> `
    },
    var 'article-two' :{
        title:'Article Two | Ritkim Mondal',
        heading:'Article Two',
        date:'Aug 3,2017',
        content:
        ` <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nisi fugiat magni quos reprehenderit quasi consectetur dolor ex qui sapiente blanditiis similique esse corporis asperiores quibusdam aperiam, eum, sunt officia.</P>`
    },
    var 'article-three' :{
        title:'Article Three | Ritkim Mondal',
        heading:'Article Three',
        date:'Aug 3,2017',
         content:
        ` <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nisi fugiat magni quos reprehenderit quasi consectetur dolor ex qui sapiente blanditiis similique esse corporis asperiores quibusdam aperiam, eum, sunt officia.</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quisquam, aperiam, atque cum, animi cupiditate vero non exercitationem magnam dolorum officiis nulla. Ab dignissimos ducimus eligendi nam odit, architecto quis.</P>`
    }
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
      <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
    <div class="container">
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>${content}</div>
    </div>
    </body>
    </html> 
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
    var articleName=res.params.articleName;
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
