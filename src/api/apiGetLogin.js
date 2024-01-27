import api from "./api";

export const getLogin = async (btoa) => {
    
    const headers = {
        'Authorization': `Basic ${btoa}=`,
    };
    const config = {
        headers: headers,
    };

    return api.get('/GetLastValue?Point=10', config).then(response => response.data)
}
