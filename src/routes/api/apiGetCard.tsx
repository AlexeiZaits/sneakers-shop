import axios from 'axios';

const apiKey = process.env.SNEAKERS_APP_API_KEY;

export async function apiGetCard(id:string | number):Promise<any>{
    try {
        const responseCard = await axios.get('https://api.github.com/repos/AlexeiZaits/api/contents/cards/%D1%81ards.json', {
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
        const responseImgs = await axios.get(`https://api.github.com/repos/AlexeiZaits/api/contents/cards/images/card_${id}`, {
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
        const images = responseImgs.data.map((item:any) => item.name)
        
        
        return {data: responseCard.data.cards[+id-1], imgs: images};
    } catch (error) {
        console.log(error)
        return error
    }
}
