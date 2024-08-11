import { Item, ItemType } from "./types";

export const ITEMS: Item[] = [
  {
    type: ItemType.A,
    text: "Item A",
    children: [
      {
        type: ItemType.B,
        text: "Item B",
        children: [
          {
            type: ItemType.C,
            text: "Item C",
            children: [
              {
                type: ItemType.D,
                text: "Item D",
                children: [
                  {
                    type: ItemType.E,
                    text: "Item E",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
