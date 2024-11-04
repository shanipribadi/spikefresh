import type { Signal } from "@preact/signals";

interface LoadingProps {
  text: Signal<string>;
}

export default function Loading(props: LoadingProps) {
  return (
    <>
      <section className="stats">
        <section className="stat">
          <h2 className="stat-title">Loading Component</h2>
          <p className="stat-value">{props.text}</p>
          <p className="stat-desc">Loading text description</p>
        </section>
        <section className="stat">
          <button
            className="btn glass self-top"
            onClick={() => props.text.value = "button1"}
          >
            Mark Button1
          </button>
          <button
            className="btn glass"
            onClick={() => props.text.value = "button2"}
          >
            Mark Button2
          </button>
        </section>
      </section>
    </>
  );
}
