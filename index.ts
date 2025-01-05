import express, { Request, Response } from 'express';
import categoryRoute from './src/routes/categoryRoute';
import authRoute from './src/routes/authRoutes';
import postRoute from './src/routes/postRoutes';
import fileUploadRouter from './src/routes/fileUploadRoute';
const app = express();
const port=process.env.PORT || 3000;
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Server Is running!' });
});
// category 
app.use('/api/v1/', categoryRoute);
// posts
app.use('/api/v1/', postRoute);
// users
app.use('/api/v1/auth/',authRoute);
// file upload
app.use('/api/v1/',fileUploadRouter);
app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
