import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import db from './config/database.js';
import router from './routes/students.js';


const app = express();
let log = console.log;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



try {
    await db.authenticate();
    log('Connection is successfull');
} catch(err){
    console.error('Unable to connect', err);
}

// const db = mysql.createConnection({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     password: process.env.DB_PASS,
//     database: "superheros"
// });

// db.connect((err)=>{
//     if(err) throw err;
//     console.log("Connected");
// });

app.get('/', (req, res)=>{
    // db.query("SELECT * FROM Students", (err, rows)=>{
    //     if(err) throw err;
    //     log("Data: ", rows);
    // })
    res.json({message: 'Hello World'});
});

//API Routes 
app.use('/students', router);


// Semesters
app.get('/semesters', (req, res)=>{
    res.send('Semesters');
});

app.get('/semesters/:id', (req, res)=>{
    res.send('Retrieve semester by ID');
});

app.post('/semesters', (req, res)=>{
    res.send('posting to semesters');
})

app.put('/semesters/:id', (req, res)=>{
    res.send('Update semester by ID');
});

app.delete('/semesters/:id', (req, res)=>{
    res.send('Delete semester by ID');
});

// Courses
app.get('/courses', (req, res)=>{
    res.send('courses');
});

app.get('/courses/:id', (req, res)=>{
    res.send('Retrieve course by ID');
});

app.post('/courses', (req, res)=>{
    res.send('posting to courses');
})

app.put('/courses/:id', (req, res)=>{
    res.send('Update course by ID');
});

app.delete('/courses/:id', (req, res)=>{
    res.send('Delete course by ID');
});

// Classes
app.get('/classes', (req, res)=>{
    res.send('Classes');
});

app.get('/classes/:id', (req, res)=>{
    res.send('Retrieve class by ID');
});

app.post('/classes', (req, res)=>{
    res.send('posting to classes');
})

app.put('/classes/:id', (req, res)=>{
    res.send('Update class by ID');
});

app.delete('/classes/:id', (req, res)=>{
    res.send('Delete class by ID');
});



// Tasks
app.get('/tasks', (req, res)=>{
    res.send('Tasks');
});

app.get('/tasks/:id', (req, res)=>{
    res.send('Retrieve task by ID');
});

app.post('/tasks', (req, res)=>{
    res.send('posting to tasks');
})

app.put('/tasks/:id', (req, res)=>{
    res.send('Update task by ID');
});

app.delete('/tasks/:id', (req, res)=>{
    res.send('Delete task by ID');
});


// Scales
app.get('/scales', (req, res)=>{
    res.send('Scales');
});

app.get('/scales/:id', (req, res)=>{
    res.send('Retrieve scale by ID');
});

app.post('/scales', (req, res)=>{
    res.send('posting to scales');
})

app.delete('/scales/:id', (req, res)=>{
    res.send('Delete scale by ID');
});



app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is listening");
});