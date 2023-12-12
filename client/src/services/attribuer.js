import API from "./API";

export const getConcours = async () => {
    return (await API.get('/eval/recupconcours'))
}

export const addCompetiteur = async (data) => {
    return (await API.post('/attribuer/addcompetiteur', data))
}