import * as dotenv from 'dotenv' 
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { startStandaloneServer } from '@apollo/server/standalone';
import cors from 'cors';
import pkg from 'body-parser';
const {json} = pkg;
import express from 'express';
//import mongoose from 'mongoose';
import typeDefs from './typeDefs.mjs';
import resolvers from './resolvers.mjs';

dotenv.config()
const port = process.env.PORT || 9000;
const DB = process.env.ATLAS_URI;

const startServer = async () => {

    const app = express();

    const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection : true                //allows production access
    });

    // await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })      //exclusively looks on IPv4
    // .then(() => { console.log("Succesfully Connected to Old School Database") })   
    // .catch((err) => { console.log(err + " => Error Connecting to the Mongodb Database") })
    
    //await startStandaloneServer(server);

    const { url } = await startStandaloneServer(server);
    
    app.use('/', cors(), json(), expressMiddleware(server));
    console.log(`🚀 Server ready at ${url}`);

    app.listen({ port: port });
};

startServer();