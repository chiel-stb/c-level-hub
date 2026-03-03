(function() {
  if (localStorage.getItem('__clh_auth') === '1') return;
  var d = document.createElement('div');
  d.id = 'pw-gate';
  d.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#0B0B2B;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;';
  d.innerHTML = '<div style="text-align:center;max-width:360px;padding:24px;">'
    + '<div style="font-size:32px;font-weight:700;color:white;margin-bottom:8px;">C-Level Hub</div>'
    + '<div style="color:rgba(255,255,255,0.5);margin-bottom:32px;font-size:14px;">Enter password to continue</div>'
    + '<input id="pw-input" type="password" placeholder="Password" autofocus style="width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:white;font-size:16px;font-family:inherit;outline:none;margin-bottom:12px;">'
    + '<button id="pw-btn" style="width:100%;padding:14px;border-radius:12px;border:none;background:#056DFF;color:white;font-size:16px;font-weight:700;font-family:inherit;cursor:pointer;">Unlock</button>'
    + '</div>';
  document.body.prepend(d);
  var inp = document.getElementById('pw-input');
  var btn = document.getElementById('pw-btn');
  function tryUnlock() {
    if (inp.value === 'Stb2o26') {
      localStorage.setItem('__clh_auth', '1');
      d.remove();
    } else {
      inp.style.borderColor = '#ef4444';
      inp.value = '';
      inp.placeholder = 'Incorrect password';
    }
  }
  btn.addEventListener('click', tryUnlock);
  inp.addEventListener('keydown', function(e) { if (e.key === 'Enter') tryUnlock(); });
})();
