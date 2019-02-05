import lang from '../lang';

export const getPositionOptions = () => {
    return lang.POSITIONS.map((title, id) => ({
        id,
        title,
    }));
};

export const getPositionTitle = (id) => lang.POSITIONS[id];
