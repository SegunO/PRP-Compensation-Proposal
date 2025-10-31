<script>
(function() {
  'use strict';

  // Duplication guard
  if (document.getElementById('segun-badge-wrapper')) return;

  // Inject keyframes (namespaced) + reduced-motion guard
  const style = document.createElement('style');
  style.textContent = `
    @keyframes segun-spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }

    #segun-badge-wrapper i {
      pointer-events: none;
      position: absolute; inset: 0; z-index: -1; padding: 1.5px;
      transition: all .2s cubic-bezier(.4,0,.2,1);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      border-radius: inherit;
    }
    #segun-badge-wrapper i::before {
      content: "";
      position: absolute; left: 50%; top: 50%;
      display: block; border-radius: 9999px; opacity: 0;
      background: conic-gradient(from 0deg at 50% 50%, #ec4899, #fbbf24, #3b82f6, #ec4899);
      width: calc(200%); padding-bottom: calc(200%);
      transform: translate(-50%, -50%); z-index: -1; will-change: transform;
    }
    #segun-badge-wrapper:hover i::before {
      opacity: 1;
      animation: segun-spin 3s linear infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      #segun-badge-wrapper:hover i::before { animation: none; }
    }
  `;
  document.head.appendChild(style);

  // Wrapper
  const badgeWrapper = document.createElement('div');
  badgeWrapper.id = 'segun-badge-wrapper';

  // Inner
  const badgeInner = document.createElement('span');
  badgeInner.id = 'segun-badge-inner';

  // Mask element
  const borderMask = document.createElement('i');

  // Link (update to your site or repo)
  const link = document.createElement('a');
  link.href = 'https://seguno.github.io/PRP-Compensation-Proposal'; // ← set your URL
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Made by Segun');

  // Icon (local asset, not external)
  const icon = document.createElement('img');
  icon.src = '/assets/segun-badge-logo.svg'; // ← local file
  icon.alt = 'Segun badge';                   // ← updated alt
  icon.style.marginRight = '6px';
  icon.style.width = '16px';
  icon.style.height = '16px';
  icon.style.filter = 'brightness(0) invert(1)';

  // Text
  const text = document.createTextNode('Made by Segun');

  // Styles
  Object.assign(badgeWrapper.style, {
    position: 'fixed', bottom: '20px', left: '20px', zIndex: '999999',
    color: '#ffffff', borderRadius: '9999px', background: 'rgba(0,0,0,0.4)',
    fontSize: '12px', fontWeight: '500', display: 'inline-block',
    cursor: 'pointer', padding: '1.5px', overflow: 'hidden',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)'
  });
  Object.assign(badgeInner.style, {
    background: 'rgba(0,0,0,0.6)', padding: '8px 16px', display: 'flex',
    alignItems: 'center', borderRadius: '9999px',
    boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)'
  });
  Object.assign(link.style, {
    color: '#ffffff', textDecoration: 'none', fontWeight: '500',
    display: 'flex', alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  });

  // Hover effects
  badgeWrapper.addEventListener('mouseenter', function() {
    badgeInner.style.background = 'rgba(0,0,0,0.75)';
    badgeInner.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.7)';
  });
  badgeWrapper.addEventListener('mouseleave', function() {
    badgeInner.style.background = 'rgba(0,0,0,0.6)';
    badgeInner.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.5)';
  });

  // Assemble
  link.appendChild(icon);
  link.appendChild(text);
  badgeInner.appendChild(link);
  badgeWrapper.appendChild(badgeInner);
  badgeWrapper.appendChild(borderMask);

  // Mount
  function init() {
    if (document.body) document.body.appendChild(badgeWrapper);
    else document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(badgeWrapper);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
</script>
