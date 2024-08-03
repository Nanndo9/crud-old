import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface IPhraseInstance extends Model {
    id: number;
    author: string;
    txt: string;
}

export const Phrase = sequelize.define<IPhraseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    author: DataTypes.STRING,
    txt: DataTypes.STRING,
},{
    tableName:'phrase',
    timestamps:false
});
