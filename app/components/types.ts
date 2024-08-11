export enum ItemType {
  A,
  B,
  C,
  D,
  E,
}

export type ItemA = {
  type: ItemType.A;
  text: string;
  children: Item[];
};

export type ItemB = {
  type: ItemType.B;
  text: string;
  children: Item[];
};

export type ItemC = {
  type: ItemType.C;
  text: string;
  children: Item[];
};

export type ItemD = {
  type: ItemType.D;
  text: string;
  children: Item[];
};

export type ItemE = {
  type: ItemType.E;
  text: string;
  children: Item[];
};

export type Item = ItemA | ItemB | ItemC | ItemD | ItemE;
