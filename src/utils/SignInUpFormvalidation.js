export const emailvalidator = (email) => {
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  if (!emailValidation) return "Please enter a valid email address";
  return null;
};

export const passwordvalidator = (password) => {
  const passwordValidation =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!passwordValidation) return "Please enter a valid password";
  return null;
};

export const FullnameValidator = (fullName) => {
  if (!fullName) return "Please fill the required filed.";
  return null;
};

export const serverValidatorMessage = (errorMessage) => {
  console.log(errorMessage);
  if (errorMessage?.includes("(auth/invalid-email)")) {
    return `Email is not valid.`;
  } else if (errorMessage?.includes("(auth/missing-password)")) {
    return `password is not valid.`;
  } else if (errorMessage?.includes("(auth/email-already-in-use)")) {
    return `Email is already registered`;
  } else if (errorMessage?.includes("(auth/invalid-credential)")) {
    return `Invalid Email or Password`;
  } else {
    return null;
  }
};
