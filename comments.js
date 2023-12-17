// Create web server
const app = express();
const port = 3000;

// Connect to database
mongoose.connect('mongodb://localhost/comments', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Cannot connect to database');
        console.log(err);
    });

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set up view engine
app.set('view engine', 'ejs');

// Set up routes
app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/comments', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.render('index', { comments: comments });
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
});

app.get('/comments/new', (req, res) => {
    res.render('new');
});

app.post('/comments', (req, res) => {
    Comment.create(req.body.comment)
        .then((comment) => {
            console.log('Comment created');
            console.log(comment);
            res.redirect('/comments');
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        });
});

app.listen(port, () => {
    console.log('Server started');
});