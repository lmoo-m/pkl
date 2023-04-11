import { JurnalsPublic } from "../App";

export const getJurnalById = (id) => {
    const data = JurnalsPublic.filter((e) => e.id === id)[0];
    return data;
};
