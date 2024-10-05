export const steps = [
  {
    label: "Personal Details",
    value: "PERSONAL_DETAILS",
    id: 1,
    fields: [
      {
        label: "First Name",
        inputType: "input",
        type: "text",
        name: "firstName",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter first name",
          },
        ],
      },
      {
        label: "Middle Name",
        inputType: "input",
        type: "text",
        name: "middleName",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter first name",
          },
        ],
      },
      {
        label: "Last Name",
        inputType: "input",
        type: "text",
        name: "lastName",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter last name",
          },
        ],
      },
    ],
  },
  {
    label: "Interests",
    value: "INTERESTS",
    id: 2,
    fields: [
      {
        label: "Movie",
        inputType: "input",
        type: "text",
        name: "movie",
        validations: [],
      },
      {
        label: "Book",
        inputType: "input",
        type: "text",
        name: "book",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter book name",
          },
        ],
      },
      {
        label: "Game",
        inputType: "input",
        type: "text",
        name: "game",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter game name",
          },
        ],
      },
    ],
  },
  {
    label: "Account",
    value: "ACCOUNT",
    id: 3,
    fields: [
      {
        label: "Email",
        inputType: "input",
        type: "email",
        name: "email",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter your email",
          },
        ],
      },
      {
        label: "Password",
        inputType: "input",
        type: "password",
        name: "password",
        validations: [
          {
            check: (value) => value !== "",
            errorMsg: "Please enter your password",
          },
        ],
      },
    ],
  },
];

// let validartions = [{ requeid: true, maxLen: 10, minLen: 8 }];
