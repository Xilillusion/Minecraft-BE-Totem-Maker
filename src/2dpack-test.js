// Test if the submit handler is attached to the form
(function() {
  const form = document.getElementById('uploadForm');
  if (!form) {
    console.error('Test: #uploadForm not found');
    return;
  }
  // Check if handle2DPackSubmit is attached
  let found = false;
  // Try to trigger submit and see if preventDefault is called
  form.addEventListener('submit', function testHandler(e) {
    found = true;
    console.log('Test: submit event triggered');
    // Remove this test handler after first run
    form.removeEventListener('submit', testHandler);
  });
  // Simulate submit
  const event = new Event('submit', { bubbles: true, cancelable: true });
  form.dispatchEvent(event);
  if (found) {
    console.log('Test: submit event is firing');
  } else {
    console.error('Test: submit event is NOT firing');
  }

  // Check if window.handle2DPackSubmit exists
  if (typeof window.handle2DPackSubmit === 'function') {
    console.log('Test: window.handle2DPackSubmit is defined');
  } else {
    console.error('Test: window.handle2DPackSubmit is NOT defined');
  }

  // Check if the handler is attached directly (not possible to check natively, but we can override and see)
  let called = false;
  const orig = window.handle2DPackSubmit;
  window.handle2DPackSubmit = function(e) {
    called = true;
    console.log('Test: handle2DPackSubmit called');
    if (e) e.preventDefault();
    // Don't run the original logic for test
  };
  // Simulate submit again
  form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  if (called) {
    console.log('Test: handle2DPackSubmit is attached to submit');
  } else {
    console.error('Test: handle2DPackSubmit is NOT attached to submit');
  }
  // Restore
  window.handle2DPackSubmit = orig;
})();
