import api from "./api";

export const getLoggedData = async (btoa, parameter) => {
    
    const headers = {
        'Authorization': `Basic ${btoa}`,
    };
    const config = {
        headers: headers,
    };

    return api.get(`/GetLoggedData${parameter.toString() ? `?${parameter.toString()}` : ''}`, config).then(response => response.data)
}
