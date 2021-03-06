// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn',
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// -------------------------------------------------------------
// Countdown Time Setup
// -------------------------------------------------------------

$('.countdown').downCount(
  {
    date: '02/02/2021 12:00:00',
    offset: +10,
  },
  function () {
    alert('WOOT WOOT, done!');
  }
);

// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

/**
 * MAILCHIMP
 */
$('#mc-form').ajaxChimp({
  url:
    'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb',
  /* Replace Your AjaxChimp Subscription Link */
});
