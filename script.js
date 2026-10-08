// Smooth scrolling for navigation anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Interactive terminal output simulation
const terminalOutput = document.querySelector('.terminal-output');
if (terminalOutput) {
  console.log('FusionGuard Threat Engine v1.0.4 loaded.');
}

// CTA Form feedback
const ctaBtn = document.querySelector('.cta-form button');
const ctaInput = document.querySelector('.cta-input');
if (ctaBtn && ctaInput) {
  ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (ctaInput.value && ctaInput.value.includes('@')) {
      const originalText = ctaBtn.innerText;
      ctaBtn.innerText = 'Pilot Invitation Dispatched ✓';
      ctaBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      ctaBtn.style.color = '#ffffff';
      ctaInput.value = '';
      setTimeout(() => {
        ctaBtn.innerText = originalText;
        ctaBtn.style.background = '';
        ctaBtn.style.color = '';
      }, 4000);
    } else {
      ctaInput.focus();
      ctaInput.style.borderColor = '#ef4444';
      setTimeout(() => {
        ctaInput.style.borderColor = '';
      }, 2000);
    }
  });
}
