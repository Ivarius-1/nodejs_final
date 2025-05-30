import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductController {
  static async create({ body }: { body: { name: string; price: number } }) {
    try {
      const product = await prisma.product.create({
        data: { name: body.name, price: body.price },
      });
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getById({ params }: { params: { id: string } }) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(params.id) },
      });
      if (!product) throw new Error("Product not found");
      return product;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAll() {
    try {
      const products = await prisma.product.findMany();
      return products;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async delete({ params }: { params: { id: string } }) {
    try {
      const product = await prisma.product.delete({
        where: { id: Number(params.id) },
      });
      return { message: "Product deleted", product };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default ProductController;