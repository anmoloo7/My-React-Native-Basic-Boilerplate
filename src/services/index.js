import axios from 'axios';
import * as serviceTypes from './serviceTypes';

async function fetcher(serviceType) {
    var headers = {
        'Accept': "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + serviceType.bearerToken
    };
    var params = {};
    (typeof serviceType.headers === "object") && (headers = { ...headers, ...(serviceType.headers) });
    (typeof serviceType.params === "object") && (params = { ...params, ...(serviceType.params) });

    if (serviceType.method.toLowerCase() === "post") {
        return await axios.post(serviceType.url, serviceType.body, { params, headers })
            .then(response => {
                response.isJson = typeof response.data === "object" ? true : false;
                return { response };
            })
            .catch(error => {
                if (error.response) {
                    error.response.isJson = typeof error.response.data === "object" ? true : false;
                }
                return { error };
            });
    };

    return await axios.get(serviceType.url, { params, headers })
        .then(response => {
            response.isJson = typeof response.data === "object" ? true : false;
            return { response };
        })
        .catch(error => {
            if (error.response) {
                error.response.isJson = typeof error.response.data === "object" ? true : false;
            }
            return { error };
        });
}
export default fetcher;
export { serviceTypes };