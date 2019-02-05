import lang from '../lang';

export const getPositionOptions = () => {
    return lang.POSITIONS.map((title, id) => ({
        id,
        title,
    }));
};

export const getPositionTitle = (id) => lang.POSITIONS[id];

export const getServerData = (data) => {
    const formData = new FormData();

    for(const key in data){
        formData.append(key, data[key]);
    }

    return formData;
};
