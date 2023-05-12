export const typeDefs = `
    type Query {
        monsters: [Monster!]!
        monster(name: String!): Monster!
    }

    type Monster {
        _id: ID!
        name: String!
        AC: Int
        HD: Int
        Att: String 
        THAC0: Int
        MV: Int 
        D: Int 
        W: Int 
        P: Int 
        B: Int
        S: Int
        ML: Int
        AL: String
        XP: Int
        NA: String
        TT: String
    }

    type Mutation {
        createMonster(
            name: String!
            AC: Int
            HD: Int
            Att: String 
            THAC0: Int
            MV: Int 
            D: Int 
            W: Int 
            P: Int 
            B: Int
            S: Int
            ML: Int
            AL: String
            XP: Int
            NA: String
            TT: String
        ): Monster!
    }
`;