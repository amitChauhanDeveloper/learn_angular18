export interface IProduct {
  id: number;
  skuCode?: string;
  name?: string;
  quantity?: string;
  price?: string;
  description?: string;
}

export class Product implements IProduct {
  constructor(
    public id: number = 0,
    public skuCode?: string,
    public name?: string,
    public quantity?: string,
    public price?: string,
    public description?: string
  ) {}
}
