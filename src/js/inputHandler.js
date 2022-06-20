/**
 * @param  {} e
 * @returns {void}
 */
function inputHandler(e) {
  const target = e.target;

  if (
    target.getAttribute('required') !== null &&
    target.classList.contains('error')
  ) {
    target.classList.remove('error');
  }
}
export default inputHandler;
