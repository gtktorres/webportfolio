import * as dotenv from 'dotenv' 
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import {pkg} from 'body-parser';
const json = pkg;
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

dotenv.config()
const port = process.env.PORT || 80;
const DB = process.env.ATLAS_URI;

const startServer = async () => {

    const app = express();

    const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

    await server.start();

    app.use('/graphql', cors(), json(), expressMiddleware(server));

    await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Succesfully Connected to Old School Database") })   
    .catch(() => { console.log("Error Connecting to the Mongodb Database") })
    

    app.listen({ port: port });
};

startServer();