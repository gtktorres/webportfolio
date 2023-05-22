import { Monster, Monsters } from './models/Monster.mjs'

const resolvers = {
    Query: {
        monsters: async () => await Monsters.find(),
        async monster (parent, args, context, info) {
            const { name } = args;
            return await Monster.findOne({ name: `${name}` })
        }
    },
    Mutation: {
        createMonster: async (_, {
            name,
            AC, 
            HD, 
            Att, 
            THAC0, 
            MV, 
            D, 
            W, 
            P, 
            B, 
            S, 
            ML, 
            AL, 
            XP, 
            NA, 
            TT
            }) => {            
            const monster = new Monster({ 
                name: name,
                AC: AC, 
                HD: HD, 
                Att: Att, 
                THAC0: THAC0, 
                MV: MV, 
                D: D, 
                W: W, 
                P: P, 
                B: B, 
                S: S, 
                ML: ML, 
                AL: AL, 
                XP: XP, 
                NA: NA, 
                TT: TT
            });
            await monster.save();
            console.log(monster);
            return monster;
        }
    }
};

export default resolvers;