import api from "./api";

export const getTreeItems = async (btoa, parameter) => {
    
    const headers = {
        'Authorization': `Basic ${btoa}`,
    };
    const config = {
        headers: headers,
    };

    return api.get(`/GetTreeItems${parameter.toString() ? `?${parameter.toString()}` : ''}`, config).then(response => response.data)
}
