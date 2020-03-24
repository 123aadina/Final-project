//form validators in backend too

const validateForm = formData => {
  if (formData.name.length < 2 || formData.name.length > 15) {
    return false;
  }
  if (
    !formData.email.includes("@") ||
    (formData.email === "" && !formData.emailChecked === true)
  ) {
    return false;
  }

  const strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!formData.password.match(strongRegex)) {
  }
  return false;
};

const reg = new RegExp("^([+]{0,1})([0-9]+)");
if (!formData.phone.match(reg) || formData.phone.length > 13) {
}
return false;

if (formData.languages.length > 30) {
}

return false;

if (formData.comment.length > 100) {
  return false;
}
return true;

const validateAgreeTerms = (formData) => {
    if (!formData.agreeChecked) {
      return false;
    }
    return true;

module.exports = {validateForm,validateAgreeTerms};
