import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server Is running!' });
});

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
