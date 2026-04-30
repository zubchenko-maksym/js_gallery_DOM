'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('ul');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  let link = ev.target.parentElement;

  if (ev.target.tagName === 'IMG') {
    link = ev.target.parentElement;
  }

  if (link.tagName !== 'A') {
    return;
  }

  largeImg.src = link.href;
});
