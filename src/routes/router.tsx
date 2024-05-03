import { Outlet, createBrowserRouter } from "react-router-dom";
import { App } from "src/app";
import { CheckoutOrder, CollectionItem, Collections, Contact, ErrorPage, Men, Women } from "../pages";
import { Home } from "@/pages/Home";

import { ICard } from "@/features/cardList/lib/interfaces";
import { apiGetCard } from "./api/apiGetCard";
import { apiGetCards } from "./api/apiGetCards";


export const router = createBrowserRouter([
    { 
      path: "sneakers-shop/",
      element: <App><Outlet/></App>,
      errorElement: <App><ErrorPage/></App>,
      children: [
        {
          path:  "",
          element: <Home />,
        },
        {
          path:  "collections/",
          element: <Collections />,
        },
        { path: "collections/:collectionId",
          element: <CollectionItem/>,
          loader: cardLoader,
        },
        { 
          path:  "men/",
          element: <Men/>,
        },
        { path: "men/:collectionId",
          element: <CollectionItem/>,
          loader: cardLoader,
        },
        { 
          path:  "women/",
          element: <Women />,
        },
        { path: "women/:collectionId",
          element: <CollectionItem/>,
          loader: cardLoader,
        },
        { path: "women/:collectionId/modal",
          element: <CollectionItem/>,
          loader: cardLoader,
        },
        {
          path:  "contact/",
          element: <Contact/>,
        },
        {
          path: "checkout-order/",
          element: <CheckoutOrder/>
        }
      ],
    },
  ]);
export async function cardsLoader() {
    const cards:ICard[] = await apiGetCards();
    return { cards };
}
export async function cardLoader({params}:any) {
    const card:{data: ICard, imgs: string[]} = await apiGetCard(params.collectionId);
    if (card.data === undefined) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    return { card };
}