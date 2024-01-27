import api from "./api";

export const getLastItems = async (btoa, parameter) => {
    
    const headers = {
        'Authorization': `Basic ${btoa}=`,
    };
    const config = {
        headers: headers,
    };

    return api.get('/GetLastValue?Point=10', config).then(response => response.data)
}
