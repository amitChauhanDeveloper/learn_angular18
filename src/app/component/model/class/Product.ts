export class Product{
  id: number;
  skuCode: string;
  name: string;
  quantity: string;
  price: string
  description: string;

  constructor(){
    this.id = 0;
    this.skuCode = '';
    this.name = '';
    this.quantity = '';
    this.price = '';
    this.description = '';
  }

}