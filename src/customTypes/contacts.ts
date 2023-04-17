export interface IContact {
  id: string;
  name: string;
  lastname: string;
  telephones: {
    telephone: string;
    type: string;
  }[];
  address: {
    zipcode: string;
    city: string;
    district: string;
    state: string;
    street: string;
    number: string;
    complement: string;
  }[];
}
