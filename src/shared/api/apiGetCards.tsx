import { ICard } from '@/features/cardList/lib/interfaces';
import { visibleCardList } from '@/features/cardList/model/card-list-slice';
import axios from 'axios';

const apiKey = process.env.SNEAKERS_APP_API_KEY;

export async function apiGetCards(category?: string, argCards?: ICard[]): Promise<{cards: ICard[], category: string}> {
    if (!(category && ["men", "women", "collections", "new"].includes(category))){
        throw new Error("wrong category")
    }
    if (argCards?.length) return {cards: argCards, category: category}
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
        const cards: ICard[] = response.data.cards
        if (category) return {cards: visibleCardList(cards, category), category: category} // захардкожено
        return {cards: cards, category: category};

    } catch (error) {
        throw new Error(`${error}`)
        
    }
}