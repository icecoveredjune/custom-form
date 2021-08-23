import './css/index.css';
import wrapperClickHandler from './js/wrapperClickHandler';
import inputHandler from './js/inputHandler';

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementsByClassName('wrapper')[0];
  const mainTemplate = document.getElementsByClassName('main')[0];
  const mainTemplateClone = mainTemplate.content.cloneNode(true);

  wrapper.addEventListener('click', wrapperClickHandler.bind(this));
  wrapper.addEventListener('input', inputHandler.bind(this));
  // remove org delete button from first author container
  mainTemplateClone.querySelector('.delSubMain').parentElement.remove();
  // remove author delete button from first author container
  mainTemplateClone.querySelector('.delMain').parentElement.remove();
  document
    .querySelector('.wrapper > div:nth-of-type(1)')
    .insertBefore(
      mainTemplateClone,
      document.getElementsByClassName('addMain')[0],
    );
});
