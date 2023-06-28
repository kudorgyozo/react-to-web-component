import { useEffect, useState } from "react";

export type CounterProps = {
  count?: number;
  onCount?: (value: number) => void;
};

export const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(props.count || 0);
  }, [props.count]);

  const handleClick = () => {
    setCount((prev) => {
      props.onCount?.(prev + 1);
      return prev + 1;
    });
  };

  return (
    <div className="__counter">
      <h1>Hello from Counter</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};
