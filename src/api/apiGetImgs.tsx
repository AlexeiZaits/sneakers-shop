import { octokit } from "./octokit";

export async function apiGetImgs(number: number, amount: string){
    try {
        const response = await octokit.request(`GET /repos/AlexeiZaits/api/contents/cards/images/card_${number}`, {
            headers: {
            "content-type": "text/plain",
            "X-GitHub-Api-Version": "2022-11-28",
            },
        });
        if (amount === "single"){
            return response.data[0].download_url
        } else if (amount === "all"){
            return response.data.map((item:any)=> item.download_url)
        }
        
    } catch (error) {
        return error
    }
    
}