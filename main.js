var h = require('virtual-dom/h'),
main = require('main-loop'),
colorMap = [20, 100, 30],
loop = main({
  n: 0,
  rgb: 'rgb(' + colorMap.join(', ') + ')'
}, render, require('virtual-dom'));
document.getElementById('content').appendChild(loop.target);

function render (state) {
  function onclick () {
    colorMap = colorMap.map(function(item) {
      return (item >= 255) ? 0: item += (Math.round(Math.random(item) * 20));
    });
    loop.update({
      n: state.n + 1,
      rgb: 'rgb(' + colorMap.join(', ') + ')'
    });
  }
  return h('div', {
    id: "application"
  }, [
    h('h1', { style: { color: state.rgb } }, 'clicked ' + state.n + ' times'),
    h('button', { onclick: onclick }, 'click me!')
  ]);
}
