import { NextRequest } from 'next/server';

import {ApolloClient, InMemoryCache, gql} from "@apollo/client";

export const config = {
    runtime: 'edge',
}

const client = new ApolloClient({
  uri: 'https://graphql.guevaratorres.space',
  cache: new InMemoryCache(),
});

export default async function GetMonster(req: NextRequest) {
    
    client
    .query({
    query: gql`
        query GetMonster($name: String!) {
            monster(name: $name = ${req}) {
                _id
                name
                AC
                HD
                Att
                THAC0
                MV
                D
                W
                P
                B
                S
                ML
                AL
                XP
                NA
                TT
            }
        }
    `,
    })
    .then((result) => { return result });
}