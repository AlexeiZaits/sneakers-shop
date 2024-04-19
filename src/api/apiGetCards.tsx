import { octokit } from "./octokit";
import { Buffer } from "buffer";

export async function apiGetCards() {
    try {
        const response = await octokit.request(`GET /repos/AlexeiZaits/api/contents/cards/%D1%81ards.json?ref=main`, {
            headers: {
            "content-type": "text/plain",
            "X-GitHub-Api-Version": "2022-11-28",
            },
        });
        const contentBase64 = response.data.content;
        const content = Buffer.from(contentBase64, 'base64').toString('utf-8'); 

        return (JSON.parse(content)).cards
        
    } catch (error) {
        return error
    }

    
}