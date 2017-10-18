// import './src/scss/app.scss';
import { Foundation } from 'foundation.core';
// import { Foundation } from '~/node_modules/foundation-sites';

Foundation.addToJquery($);

$(document).ready(function () {
  $(document).foundation();
}());

alert("Foundation is calling!");
