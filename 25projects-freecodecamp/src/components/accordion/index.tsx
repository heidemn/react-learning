import { useState } from 'react';

interface Item {
  id: number;
  question: string;
  answer: string;
}

export function Accordion({ id, question, answer }: Item) {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
      <button onClick={handleClick}>{expanded ? '[–]' : '[+]'}</button>
      Q: {question}
      { expanded ? <div style={{fontSize: '15px'}}>{answer}</div> : null }
    </div>
  )
}
