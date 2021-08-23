import validate from './validate';

/**
 * @param  {event} e
 * @returns {void}
 */
function wrapperClickHandler(e) {
  const target = e.target;
  const mainTemplate = document.getElementsByClassName('main')[0];
  const subMainTemplate = document.getElementsByClassName('subMain')[0];

  if (target.classList.contains('addMain') || target.closest('.addMain')) {
    const template = mainTemplate.content.cloneNode(true);
    document
      .querySelector('.wrapper > div:nth-of-type(1)')
      .insertBefore(template, document.getElementsByClassName('addMain')[0]);
  }
  if (target.classList.contains('delMain') || target.closest('.delMain')) {
    target.closest('.mainContainer').remove();
  }
  if (
    target.classList.contains('addSubMain') ||
    target.closest('.addSubMain')
  ) {
    const template = subMainTemplate.content.cloneNode(true);
    const parent = target.closest('.summary-content');

    parent.insertBefore(
      template,
      parent.getElementsByClassName('addSubMain')[0],
    );
  }
  if (
    target.classList.contains('delSubMain') ||
    target.closest('.delSubMain')
  ) {
    target.closest('.subMainContainer').remove();
  }
  if (target.classList.contains('validate')) {
    validate();
  }
}
export default wrapperClickHandler;
