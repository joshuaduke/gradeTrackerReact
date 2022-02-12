require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const db = require('./config/db.config');  

const port  = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({
    name: "gpaTracker-session",
    secret: process.env.COOKIE_SECRET,
    httpOnly: true
}))

const queries = require('./sqlData');

db.connect((err)=>{
    if(err) throw err;
    
    // queries.dropTable();
    // queries.createCoursestable();
    // queries.insertTask();
    // queries.createTasksTable();
    console.log('DB connected successfully');

})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.get('/', (req, res)=>{
    res.send('Working again');
})

// 404 PAGE Must be at the bottom
// app.use((req, res)=>{
//     res.status(404).render('404');
// })

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})

// kill database connection once you log out