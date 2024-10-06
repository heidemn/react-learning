import { useState } from "react";
import React from "react";

interface Item {
  id: number;
  question: string;
  answer: string;
}

export function Accordions({
  items,
  multiSelect,
}: {
  items: Item[];
  multiSelect: boolean;
}) {
  const [expanded, setExpanded] = useState(items.map((item) => false));

  function handleClick(item: Item) {
    const expandedNew = multiSelect
      ? [...expanded]
      : items.map((item) => false);
    expandedNew[item.id] = !expanded[item.id];
    setExpanded(expandedNew);
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => handleClick(item)}
            style={{ cursor: "pointer" }}
          >
            {expanded[item.id] ? "[–]" : "[+]"}
          </button>
          Q: {item.question}
          {expanded[item.id] ? (
            <div style={{ fontSize: "15px" }}>{item.answer}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
