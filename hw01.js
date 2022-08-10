// hw01 data
const data = ['http://example.com', 'http://google.com'];

// output
// ```
// <ol>
//   <li><a href="http://example.com">http://example.com</a></li>
//   <li><a href="http://google.com">http://google.com</a></li>
// <ol>
// ```

//solution via map
function hw01map() {
  const outHw01Map = document.querySelector('.out__hw01--map');
  const ol = document.createElement('ol');
  outHw01Map.prepend(ol);

  let dataHtmlElArr = data.map(item => `<li><a href="${item}">${item}</a></li>`);
  ol.innerHTML = dataHtmlElArr;
}

//solution via forEach
function hw01foreach() {
  const outHw01ForEach = document.querySelector('.out__hw01--foreach');
  const ol = document.createElement('ol');
  outHw01ForEach.prepend(ol);

  data.forEach(item =>
    ol.insertAdjacentHTML('beforeend', `<li><a href="${item}">${item}</a></li>`)
  );
}

//solution via reduce
function hw01reduce() {
  const outHw01Reduce = document.querySelector('.out__hw01--reduce');
  const ul = document.createElement('ul');
  outHw01Reduce.prepend(ul);

  let dataHtmlElArr = data.reduce((acum, item, index) => {
    acum += `<li><span>${index + 1})</span> <a href="${item}">${item}</a></li>`;
    return acum;
  }, ``);
  ul.innerHTML = dataHtmlElArr;
}

hw01map();
hw01foreach();
hw01reduce();