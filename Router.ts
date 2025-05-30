import { Elysia, t } from "elysia";
import ProductController from "./controllers/ProductController";

interface ProductBody {
  name: string;
  price: number;
}

interface ProductParams {
  id: string;
}

export class Router {
  static products = new Elysia()
    .post(
      "/",
      ({ body }: { body: ProductBody }) => ProductController.create({ body }),
      {
        body: t.Object({
          name: t.String(),
          price: t.Number(),
        }),
      }
    )
    .get(
      "/:id",
      ({ params }: { params: ProductParams }) => ProductController.getById({ params }),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    .get("/", () => ProductController.getAll())
    .delete(
      "/:id",
      ({ params }: { params: ProductParams }) => ProductController.delete({ params }),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    );
}

export default Router;
