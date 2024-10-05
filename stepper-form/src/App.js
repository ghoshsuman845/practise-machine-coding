import "./styles.css";
import { steps } from "./data";
import { useState } from "react";
import Stepper from "./components/Stepper";
import StepForm from "./components/StepForm";

export default function App() {
  const [activeStep, setActiveStep] = useState(steps?.[0]?.value);

  const [formValues, setFormValues] = useState({});

  function changeStep(stepValue) {
    setActiveStep(stepValue);
  }

  return (
    <div className="App">
      <h1>Profile Setup</h1>
      <Stepper steps={steps} activeStep={activeStep} />
      <StepForm
        formValues={formValues}
        activeStep={activeStep}
        steps={steps}
        changeStep={changeStep}
        changeFormValues={(values) => setFormValues(values)}
      />
    </div>
  );
}
