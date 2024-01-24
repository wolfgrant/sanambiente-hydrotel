import api from "./api";

export const getTreeItems = async (btoa) => {

    return api.get('/GetTreeItems?Level=Site&ParentID=10', {
        Authorization: `Basic ${btoa}`,
    }).then(reponse => reponse.data)
}
