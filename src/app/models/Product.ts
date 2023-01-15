import Category from "../enums/Category";

export class Product {
  name: string = "";
  description: string = '';
  price: number = 0;
  images: string[] = [];
  category: Category = Category.MAKEUP;
  id: number = 0;

  constructor(data: Partial<Product> = {}) {
    this.id = data.id ?? 0;
    this.name = data.name ?? '';
    this.description = data.description ?? '';
    this.price = data.price ?? 0;
    this.category = data.category ?? Category.MAKEUP;
    this.images = data.images ?? [];
  }
}
