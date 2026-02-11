import express from 'express';


const app = express();

app.use(express.json());

// Routes
app.use('/hello', (req, res) => {
    res.json({message: "Hello from BFF"});
});

export default app;
