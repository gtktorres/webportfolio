import { Monster, Monsters } from './models/Monster'

export const resolvers = {
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

async function findMonster(monsterName) {
    const monsterList = await Monster.findOne({monsterName});
    console.log(monsterList);
    tonsole.log(monsterList);
    // const foundMonster = await qsearch(monsterList, monsterName);
    // console.log(foundMonster);
    // return foundMonster;
}

async function qsearch( monsterList, monsterName) {
    console.log(typeof monsterList);
    for(var monster in monsterList) {
        console.log(monster);
        if(monster.name === monsterName) return monster;
    }
}