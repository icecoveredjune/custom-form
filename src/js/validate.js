/**
 * validate required inputs for completeness
 * @returns {void}
 */
function validate() {
  const requiredInputs = document.querySelectorAll(`input[required]`);

  [...requiredInputs].forEach((input) => {
    const el = input;
    // check if input insdie details tag
    const isParentDetails = el.closest('details') || false;

    if (!el.value.trim()) {
      el.classList.add('error');
      // if input is empty and parent tag details is closed
      if (isParentDetails && !isParentDetails.open) {
        // open details
        isParentDetails.open = true;
      }
    }
  });
}
export default validate;
