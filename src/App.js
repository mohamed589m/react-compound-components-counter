import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      /> */}

      <Counter>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
        <Counter.Label>My super flexible counter</Counter.Label>
      </Counter>
      <div style={{ marginTop: "30px" }}>
        <Counter>
          <Counter.Decrease icon="◀️" />
          <div>
            <Counter.Count />
          </div>
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}
