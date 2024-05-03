import axios from 'axios';

const apiKey = process.env.SNEAKERS_APP_API_KEY;

export async function apiGetCards() {
    try {
        const response = await axios.get('https://api.github.com/repos/AlexeiZaits/api/contents/cards/%D1%81ards.json', {
            headers: {
                Authorization: `${apiKey}`,
                "Accept": "application/vnd.github.v3.raw",
                "content-type": "text/plain",
                "X-GitHub-Api-Version": "2022-11-28",
            },
            params: {
                ref: 'main'
            }
        });
        
        
        
        return response.data.cards;
    } catch (error) {
        return error;
    }
}