import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';

import { conectarBD } from './database';
import { schema } from './graphql/schema';
import { verifyToken } from './middlewares/authMiddleware';
dotenv.config();

const app = express();
app.use(express.json());
app.use('/graphql', verifyToken);

/*app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));*/

app.use('/graphql', graphqlHTTP((req, res, graphQLParams) => ({
    schema,
    graphiql: true,
    context: { req, res },
})));

const iniciarServer = async () => {
    const url = process.env.DB_URL || '';
    await conectarBD(url);
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Servidor escuchando en el puerto ${port}`);
    });
};

iniciarServer();