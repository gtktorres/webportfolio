import mongoose from 'mongoose';

const monsterSchema = new mongoose.Schema({  
    _id: String,  
    name: String, 
    AC: Number, 
    HD: Number, 
    Att: String, 
    THAC0: Number, 
    MV: Number, 
    D: Number, 
    W: Number, 
    P: Number, 
    B: Number, 
    S: Number, 
    ML: Number, 
    AL: String, 
    XP: Number, 
    NA: String, 
    TT: String
}, )

export const Monster = mongoose.model(
    'Monster', monsterSchema, 'Monsters'
);

export const Monsters = mongoose.model(
    'Monsters', monsterSchema, 'Monsters'
);