import { useEffect } from 'react'

interface Props {
  count: number;
}

function Sub({ count }: Props): JSX.Element {
  // fires once, on mount
  useEffect(() => {
    console.log("Sub mount");

    // fires once, on unmount
    return () => {
      console.log("Sub unmount");
    }
  }, []);

  return (
    <>
      {count}
    </>
  )
}

export default Sub
