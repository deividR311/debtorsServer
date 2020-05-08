import Server from './classes/server';
import userRoutes from './routes/user';
import mongoose from 'mongoose';

const server = new Server();

//routes
server.app.use('/user', userRoutes);

//connection BD
mongoose.connect('mongodb://localhost:27017/debtors',
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                }, ( err ) => {
                    
                    if( err ) throw err;
                    console.log('Database ONLINE');
                }
);

// express (Server)
server.start( () => {
    console.log('servidor corriendo en el puerto ' + server.port);
});

