export enum productType {
  cara,
  cuerpo,
  hombre
}

export interface routeInfo {
  meta1: string;
  meta2: string;
  title: String;
  description: string;
  keywords: string;
  prodids: string[];
}

export class Product {
  id: string;
  lang: string;
  name: string;
  tradename?: string;
  commentId?: string;
  ratingCount?: number;
  rating?: number;
  comments?: message[];
  slogan?: string;
  title: string;
  urltitle?: string;
  urldescription?: string;
  urlkeywords?: string;
  urlcano?: string;
  description: string;
  images: string[];
  url: string;
  ean?: string;
  metadata: string[];
  fragances: string[];
  price: string;
  cant: string;
  descplus: description[];
  table: TableItemDescription[];
  imagePath: ImagePath;
  components: ProductPart[];
  pricedisc: string;
  priceToUse?: string;
  discount: string;
  nr?: number;
  ingre?: string;
  path?: string;
  stock?: any;
  type?: string;
  fragance?: string;
  videoTitle?: string;
  relatedProducts?: ProductResume[];
  relatedString?: string[];
  videoDescription?: string;
  videoURL?: string;
  companyName?: string;
  fragObject?: ProductPart[][];
  ingreTable?: TableItemDescription;
}

export interface TableItemDescription {
  items: TableItem[];
  title: string;
}

export interface TableItem {
  par?: string;
  alink?: string;
  alinkText?: string;
  image?: String;
}
export interface ProductPart {
  id?: number;
  productid: string;
  textcomponent: string;
  price?: string;
  pricedisc?: string;
  cant?: string;
  fragance?: string;
  ean?: string;
  ingre?: string;
}
export interface ProductResume {
  name: string;
  tradename: string;
  url: string;
  title: string;
  cant?: string;
  slogan?: string;
  company?: String;
  ratingCount?: number;
  rating?: number;
  pricedisc: string;
  price: string;
  components?: ProductPart[];
  type: string;
}

export interface description {
  title: string;
  longtext: string;
}

export interface ImagePath {
  xs: string;
  s: string;
  l: string;
  m: string;
  xl: string;
  xxl: string;
}

export interface bagState {
  currentPage: number;
  allowedPages: boolean[];
  validatedPages: boolean[];
  aniState: string[];
}

export const initialbagState: bagState = {
  currentPage: 1,
  allowedPages: ([] = [true, false, false]),
  validatedPages: ([] = [false, false, false]),
  aniState: ([] = ["center", "center", "center"])
};

export interface dbUser {
  name: string;
  email: string;
  allow: string;
  uid?: string;
  isBuyer?: boolean;
  isAuth: boolean;
  isBagAuth;
  address?: address;
}

export const initialAdress: address = {
  firstname: "",
  lastname1: "",
  street: "",
  number: "",
  city: "",
  plz: "",
  country: "España"
};

export const initialdbUser: dbUser = {
  name: "anonymous",
  email: "",
  allow: "none",
  uid: "",
  isBuyer: false,
  isAuth: false,
  isBagAuth: false,
  address: initialAdress
};

export interface address {
  firstname: string;
  lastname1: string;
  lastname2?: string;
  street: string;
  number: string;
  city: string;
  plz: string;
  country: string;
  phone?: string;
}

export const myFirebaseConfig = {
  apiKey: "AIzaSyDC80GHgSFMWlPN_4v03n-otj6gMOEmzQo",
  authDomain: "users-54cc7.firebaseapp.com",
  databaseURL: "https://users-54cc7.firebaseio.com",
  storageBucket: "users-54cc7.appspot.com",
  messagingSenderId: "864197424468"
};

export interface message {
  prodId?: string;
  username: string;
  title?: string;
  email: string;
  phone?: string;
  message: string;
  rating?: number;
  datePosted?: number;
  dateOrder?: number;
  tradename?: string;
  url?: string;
}

export const initialMessage: message = {
  username: "",
  title: "",
  email: "",
  message: ""
};

export interface signReturn {
  Ds_SignatureVersion: string;
  Ds_MerchantParameters: string;
  Ds_Signature: string;
}

export interface merchantParameters {
  DS_MERCHANT_AMOUNT: string;
  DS_MERCHANT_ORDER: string;
  DS_MERCHANT_MERCHANTCODE: string;
  DS_MERCHANT_CURRENCY: string;
  DS_MERCHANT_TRANSACTIONTYPE: string;
  DS_MERCHANT_TERMINAL: string;
  DS_MERCHANT_MERCHANTURL: string;
  DS_MERCHANT_URLOK: string;
  DS_MERCHANT_URLKO: string;
}
export const initialMerchant: merchantParameters = {
  DS_MERCHANT_AMOUNT: "100",
  DS_MERCHANT_ORDER: "1234567891",
  DS_MERCHANT_MERCHANTCODE: "336450242",
  DS_MERCHANT_CURRENCY: "978",
  DS_MERCHANT_TRANSACTIONTYPE: "0",
  DS_MERCHANT_TERMINAL: "1",
  DS_MERCHANT_MERCHANTURL: "",
  DS_MERCHANT_URLOK: "",
  DS_MERCHANT_URLKO: ""
};
