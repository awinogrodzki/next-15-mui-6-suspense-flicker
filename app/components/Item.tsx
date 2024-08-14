import { Suspense, useEffect } from "react";
import { LazyA, LazyB, LazyC, LazyD, LazyE, Loader } from "./lazy";
import { Item as ItemUnion, ItemType } from "./types";
import Box from "@mui/material/Box";

interface ItemProps {
  item: ItemUnion;
}

const map = {
  [ItemType.A]: LazyA,
  [ItemType.B]: LazyB,
  [ItemType.C]: LazyC,
  [ItemType.D]: LazyD,
  [ItemType.E]: LazyE,
};

function getColor(type: ItemType) {
  switch (type) {
    case ItemType.A:
      return "background.paper";
    case ItemType.B:
      return "text.secondary";
    case ItemType.C:
      return "primary.light";
    case ItemType.D:
      return "secondary.light";
    case ItemType.E:
      return "success.light";
  }
}

export function Item({ item }: ItemProps) {
  const Component = map[item.type];

  useEffect(() => {
    console.log(`Mount Item.${item.type}`);
  }, []);

  return (
    <Box color="text.primary" bgcolor={getColor(item.type)} className="p-1">
      <div className="p-1">
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
        {item.text}
      </div>
      {item.children.map((it) => (
        <Item key={item.text} item={it} />
      ))}
    </Box>
  );
}
