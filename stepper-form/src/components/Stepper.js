import { useState, useRef, useEffect } from "react";

function Stepper({ steps, activeStep }) {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[steps.length - 1].offsetWidth / 2,
    });
  }, [stepRef, steps.length]);

  if (!steps.length) {
    return <></>;
  }

  const calculateProgressBarWidth = () => {
    return ((activeStep - 1) / (steps.length - 1)) * 100;
  };
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isActiveStep = activeStep === step.value;
        const activeStepIndex = isActiveStep ? index : null;
        return (
          <div
            key={step.label}
            ref={(el) => (stepRef.current[index] = el)}
            className={`step  ${isActiveStep ? "active" : ""} `}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-name">{step.label}</div>
          </div>
        );
      })}

      <div
        className="progress-bar"
        style={{
          width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: margins.marginLeft,
          marginRight: margins.marginRight,
        }}
      >
        <div
          className="progress"
          style={{ width: `${calculateProgressBarWidth()}%` }}
        ></div>
      </div>
    </div>

    // <div className="stepper-container">
    //   {steps.map((step, index) => {
    //     const isActiveStep = activeStep === step.value;
    //     const activeStepIndex = isActiveStep ? index : null;
    //     return (
    //       <>
    //         <button className={`${isActiveStep ? "active-step" : ""} step`}>
    //           {step.label}
    //         </button>
    //         {index !== steps.length - 1 && (
    //           <div
    //             className={`step-border ${
    //               index > activeStepIndex ? "prev-step-border" : ""
    //             }`}
    //           />
    //         )}
    //       </>
    //     );
    //   })}
    // </div>
  );
}

export default Stepper;
