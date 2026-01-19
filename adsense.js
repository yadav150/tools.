(function () {
  // Avoid adding script multiple times
  if (document.getElementById('adsense-auto')) return;

  const s = document.createElement('script');
  s.id = 'adsense-auto';
  s.async = true;
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1876390706944654';
  s.crossOrigin = 'anonymous';

  // Add the script to the <head>
  document.head.appendChild(s);
})();
