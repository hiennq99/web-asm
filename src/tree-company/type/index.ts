export interface Company {
  id: string;
  createdAt: string;
  name: string;
  parentId: string;
  cost?: number;
  children?: Company[];
}

export interface Travel {
  id: string;
  createdAt: string;
  employeeName: string;
  departure: string;
  destination: string;
  price: string;
  companyId: string;
}
