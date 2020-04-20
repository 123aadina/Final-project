//form validators in backend too

const validateForm = (formData) => {
  if (
    formData.name.length < 2 ||
    (formData.name.length > 15 && formData.name === "")
  ) {
    console.log("Name validation failed.");
    return false;
  }

  if (
    formData.email &&
    (!formData.email.includes("@") ||
      (formData.email === "" && !formData.emailChecked === true))
  ) {
    console.log("Email validation failed.");
    return false;
  }

  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!formData.password.match(strongRegex)) {
    console.log("Password validation failed.");
    return false;
  }
  //adding issues validator  on the backend only
  if (formData.issues < 0 || formData.issues > 5) {
    console.log("Issues validation failed.");
    return false;
  }

  const reg = new RegExp("^([+]{0,1})([0-9]+)");
  if (!formData.phone.match(reg) || formData.phone.length > 14) {
    console.log("Phone validation failed.");
    return false;
  }

  if (formData.languages && formData.languages.length > 30) {
    console.log("Language validation failed.");
    return false;
  }

  if (formData.comment && formData.comment.length > 100) {
    console.log("Comment validation failed.");
    return false;
  }

  if (!formData.agreeChecked) {
    console.log("Agree checkbox validation failed.");
    return false;
  }
  console.log("Validation succeeded.");
  return true;
};

module.exports = { validateForm };
