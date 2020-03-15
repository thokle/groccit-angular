export interface TestPurchase {
  Brand?: string;
  Types?: string;
  Price?: number;
  Url?: string;
  Comment?: string;
  Name?: string;
  Email?: string;
  Phone?: string;
  City?: string;
  Zipcode?: number;
  Color?: string;
  Size?: string;
  Model?: string;
}

export interface RootObject {
  testPurchase: TestPurchase;
}
