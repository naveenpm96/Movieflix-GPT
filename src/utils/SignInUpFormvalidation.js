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
