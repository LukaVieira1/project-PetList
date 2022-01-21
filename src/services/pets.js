import client from "../providers/client";
export const apiCode = process.env.REACT_APP_API_CODE;

export const listPets = () => client(`pets/${apiCode}`);

export const createPet = (data) => client.post(`pets/${apiCode}`, data);
