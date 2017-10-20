import '../scss/app.scss';
import { Foundation } from 'foundation.core';
import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard.js';
import { Triggers } from 'foundation-sites/js/foundation.util.triggers.js';
import { mediaQuery } from 'foundation-sites/js/foundation.util.mediaQuery.js';
import { Motion } from 'foundation-sites/js/foundation.util.motion.js';
import { Reveal } from 'foundation-sites/js/foundation.reveal.js';

// import { Foundation } from '~/node_modules/foundation-sites';

Foundation.addToJquery($);

$(document).ready(function () {
  $(document).foundation();
}());
