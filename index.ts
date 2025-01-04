import express, { Request, Response } from 'express';
import categoryRoute from './src/routes/categoryRoute';
const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server Is running!' });
});
// category 
app.use('/api/v1/', categoryRoute);
// posts
// users
app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
