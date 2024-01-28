import api from "./api";

export const getLastValue = async (btoa, parameter) => {
    
    const headers = {
        'Authorization': `Basic ${btoa}`,
    };
    const config = {
        headers: headers,
    };

    return api.get(`/GetLastValue${parameter.toString() ? `?${parameter.toString()}` : ''}`, config).then(response => response.data)
}
