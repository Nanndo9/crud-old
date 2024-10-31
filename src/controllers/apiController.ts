import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase';
import { get } from 'http';
import { Sequelize } from 'sequelize';

export const defaultOne = (req: Request, res: Response) => {
    res.json('hello word');
};

export const createPhrase = async (req: Request, res: Response) => {
    const { author, txt } = req.body;
    let newPhrase = await Phrase.create({ author, txt });
    res.json({ id: newPhrase.id, author, txt });
};

export const getPhrase = async (req: Request, res: Response) => {
    let getPhrases = await Phrase.findAll();
    res.json({ getPhrases });
};
export const getOnePhrase = async (req: Request, res: Response) => {
    let id = req.params.id;

    let getOne = await Phrase.findByPk(id);

    try {
        res.status(200).json({ getOne });
    } catch (error) {
        res.json({ error: 'Phrase not found' });
    }
};

export const editPhrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    const { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
    if (phrase) {
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save();
        res.json({ phrase });
    } else {
        res.json({ error: 'Phrase not found' });
    }
};

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    let deletePhrases = await Phrase.destroy({
        where: { id },
    });
    res.json({ deletePhrases });
};

export const randomGet = async (req: Request, res: Response) => {
    let phrase = await Phrase.findOne({
        order: [Sequelize.fn('RANDOM')],
    });
    res.json({ phrase });
};

export const uploadFile = async (req: Request, res: Response) => {
    console.log('AVATAR', req.file);
    console.log('GALLERY', req.files);
    res.json({});
};
