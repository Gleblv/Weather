export const useHttp = () => {
    const request = async (url, method = 'GET',body = null) => {
        try {
            const response = await fetch(url, {method, body});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    };

    return {request}
}

// API call - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API key - 764fdc74ddc4e91de9a34187c8deacb3