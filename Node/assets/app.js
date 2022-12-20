const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); -> folder name 'myviews'

//listen for request
app.listen(3000);

// listen to different request
app.get('/', (rq, rs)=>{
    // rs.send('<h1>Home page</h1>');
    const blogs = [
        { title:'t1', body:'b1'},
        { title:'t2', body:'b2'},
        { title:'t3', body:'b3'}        
    ]
    rs.render('index', { title: 'Home page', blogs:blogs });
});

app.get('/about', (rq, rs)=>{
    // rs.send('<h1>Home page</h1>');
    rs.render('about');
});

app.get('/create', (rq,rs)=>{
    rs.render('create');
})

//redirects
// app.get('/about-us', (rq,rs)=>{
//     rs.redirect('/about');
// });

//404 pages
app.use((rq,rs)=>{
    rs.render('404');
});