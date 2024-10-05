import { useState } from 'react';

export function Accordion({ id, question, answer }) {
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
