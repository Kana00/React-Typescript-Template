const element = document.createElement('div');
element.innerHTML = 'test webpack';

document.body.appendChild(element);

// if (module.hot) {
//   // foreach module need to be hot ...
//   // module.hot.accept('./youtModule.js', () => {
//   //   // do something if a module need to be reload
//   // });
// }
