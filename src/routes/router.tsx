import { Outlet, createBrowserRouter } from "react-router-dom";
import { App } from "src/app";
import { CheckoutOrder, CollectionItem, Contact, ErrorPage, MainLayout } from "../pages";
import { Home } from "@/pages/Home";
import { ICard } from "@/features/cardList/lib/interfaces";
import { apiGetCard } from "../shared/api/apiGetCard";
import { apiGetCards } from "../shared/api/apiGetCards";
import { Modal } from "@/shared/ui/modal";
import { LightBox } from "../widgets";
import { GoBackKeyDown, GoBackOnBlur } from "@/features/goBackPage";
import { Button } from "@/shared/ui/button";
import { ModalGood } from "@/widgets/modalGood";

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
          path:  ":category",
          element: <MainLayout/>,
          loader: cardsLoader
        },
        { path: ":category/:collectionId",
          element: <CollectionItem/>,
          loader: cardLoader,
        },
        { path: ":category/:collectionId/modal",
          element: <CollectionItem>
            <ModalGood/>
          </CollectionItem>,
          loader: cardLoader,
        },
        {
          path:  "contact",
          element: <Contact/>,
        },
        {
          path: "checkout-order",
          element: <CheckoutOrder/>
        }
      ],
    },
  ]);

export async function cardsLoader({params} : any) {
    const data = await apiGetCards(params.category);
    return data;
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