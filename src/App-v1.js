import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  //const step = 1; we want to make this step dynamic by adding a new piece of state
  const [step, setStep] = useState(1); //1 is the default value
  //to imlement Open and close x;
  const [isOpen, setIsOpen] = useState(true); //first part

  //event handle function that will be used in the jsx component
  function handlePrevious() {
    // alert("Previous");
    //to prevent it going beyond 0 add a condition: if(step>1)
    // if (step > 1) setStep(step + 1);
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    // alert("Next");
    //step is the current step and to updsate it is by +1
    // if (step < 3) setStep(step + 1);
    //updating a state based on current state; the old way will not work so you need to pass in a callback function
    //say we want it to increase by 2 so:
    if (step < 3) {
      setStep((s) => s + 1);
      //setStep((s) => s + 1);
    }
  }
  return (
    //secont part
    //we need to put it inside a div then open javascript mode  by {}
    //as part of our conditional rendering let 's just use the && operator
    //it is a good practice to have a fragment rather than a div
    // <></>
    <>
      {/*3rd part is to update the state
   //create a button with an html entity of times which will write an x
   //similarily below, updating isOpen based on the current state
   */}
      <button
        className="close"
        onClick={
          // () => setIsOpen(!isOpen)}
          //updating is based on the current state by passing in a callback function
          () => setIsOpen((is) => !is)
        }
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              //onClick={() => alert("Prevoius")} ;will replace this callbackfunction by an eventhandler function as defined above
              onClick={handlePrevious} //here we are just passing in the function value; we are not calling it
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
