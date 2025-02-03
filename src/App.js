import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👌</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children props</p>
        <p>👶</p>
      </StepMessage>
    </div>
  );
}
function Steps() {
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
          {/*Building a reusable component to display a message*/}
          {/* <p className="message">
            <h3>step {step}</h3> {messages[step - 1]}
          </p>*/}
          {/*let's now use that StepMessage*/}
          <StepMessage step={step}>
            {messages[step - 1]}
            <div classname="buttons">
              {" "}
              {/*for styling the button purpose*/}
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert("Learn how to ${{messages[step - 1]}}")}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            {/*making a reusable button instead of these two*/}
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              //onClick={() => alert("Prevoius")} ;will replace this callbackfunction by an eventhandler function as defined above
              onClick={handlePrevious} //here we are just passing in the function value; we are not calling it
            >
              Previous
            </button>*/}
            {/*<button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>*/}
            {/*Replace the above with the button we just created*/}
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
              // emoji="👈"
            >
              <span>👉</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text="Next"
              // emoji="👉"
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

//making a reusable button instead of these two
//1. create a new function called Button and pass in all the props
//2. use the newly created button as a component and passing  all these data as props the props
//3. if we want to add an emoji, first accept it as a props in the function Button
//4. then place it where you want whithin that function Button component by creating a span and in there we put our emoji
//5 Finally pass that emoji in the component to be returned as a prop
function Button({
  textColor,
  bgColor,
  onClick,
  // text, emoji replace thes with the children props
  children,
}) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* <span>{emoji}</span>
      {text}*/}
      {children}
    </button>
  );
}
//more reusable component called StepMessage
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>step {step}</h3> {children}
    </div>
  );
}
