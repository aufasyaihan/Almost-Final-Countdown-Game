import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"; // untuk memindahkan jsx kode ke dom lain

const ResultModal = forwardRef(function ResultModal(
  { onReset, targetTime, timeLeft },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const Lost = timeLeft <= 0;
  const formattedTime = (timeLeft / 1000).toFixed(2);
  const score = Math.round((1- timeLeft / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>You {Lost ? "Lost" : "Won"}!</h2>
      {!Lost && <h3>Your Score: {score}%</h3>}
      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      {!Lost && (
        <p>
          You Stop the timer with <strong>{formattedTime} seconds left</strong>
        </p>
      )}
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
    ,document.getElementById("modal")
  );
});

export default ResultModal;
