import { useState, useEffect } from "react";

function StepForm({
  activeStep,
  steps,
  changeStep,
  formValues,
  changeFormValues,
}) {
  const fields = steps.find((step) => step.value === activeStep)?.fields;
  const stepIndex = steps.findIndex((step) => step.value === activeStep);

  useEffect(() => {
    if (fields) {
      const newFormValues = fields.reduce((a, c) => {
        a[c.name] = {};
        a[c.name]["value"] = formValues[c.name]?.value ?? "";
        a[c.name]["errors"] = formValues[c.name]?.errors ?? "";
        return a;
      }, {});
      console.log("newFormValues", newFormValues);
      changeFormValues({ ...formValues, ...newFormValues });
    }
  }, [activeStep]);

  function handleChange(e, fieldName) {
    const newFormValues = structuredClone(formValues);
    newFormValues[fieldName].value = e.target.value;
    newFormValues[fieldName].errors = "";
    changeFormValues({ ...formValues, ...newFormValues });
  }

  function handlePrevious() {
    if (stepIndex - 1 > -1) {
      changeStep(steps[stepIndex - 1]?.value);
    }
  }

  function addErrors() {
    const newFormValues = structuredClone(formValues);
    fields.forEach((field) => {
      const currentFormValue = newFormValues[field.name];
      for (let validate of field.validations) {
        if (!validate["check"](currentFormValue["value"])) {
          newFormValues[field.name].errors = validate["errorMsg"];
        }
      }
    });
    const isValidated = checkValidation(newFormValues);
    changeFormValues({ ...formValues, ...newFormValues });
    return isValidated;
  }

  function checkValidation(newFormValues) {
    let isValidated = true;
    Object.keys(newFormValues).forEach((fieldValue) => {
      if (newFormValues[fieldValue]["errors"]) {
        isValidated = false;
      }
    });
    return isValidated;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const hasValidationsPassed = addErrors();
    if (hasValidationsPassed) {
      if (stepIndex + 1 < steps.length) {
        changeStep(steps[stepIndex + 1]?.value);
      } else {
        console.log(formValues);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields?.map((field) => {
          const fieldLabel = Object.keys(formValues).find(
            (val) => val === field.name
          );
          const fieldValue = formValues[fieldLabel]?.value;
          const hasErrors = formValues[fieldLabel]?.errors;
          return (
            <div className="field">
              <label>{field.label}</label>
              {field.inputType === "input" ? (
                <>
                  <input
                    type={field.type}
                    value={fieldValue}
                    onChange={(e) => handleChange(e, fieldLabel)}
                  />
                  {hasErrors && (
                    <p style={{ color: "red" }}>
                      {formValues[fieldLabel]?.errors}
                    </p>
                  )}
                </>
              ) : null}
            </div>
          );
        })}
        <div className="form-actions">
          {stepIndex !== 0 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}

          <button type="submit">
            {stepIndex !== steps.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepForm;
