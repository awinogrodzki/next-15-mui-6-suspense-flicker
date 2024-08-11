"use client";

import { Item } from "./Item";
import { ITEMS } from "./tree";

export function Items() {
  return (
    <div>
      <b>Items</b>
      <br />
      {ITEMS.map((item) => (
        <Item key={item.text} item={item} />
      ))}
    </div>
  );
}
