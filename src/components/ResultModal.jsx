import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeLeft },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      {result === "Won" && (
        <p>
          You Stop the timer with <strong>{timeLeft} seconds left</strong>
        </p>
      )}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
