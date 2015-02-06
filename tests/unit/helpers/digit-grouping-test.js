import {
  digitGrouping
} from 'broccoli-plugin-search/helpers/digit-grouping';

module('DigitGroupingHelper');

test('it works', function() {
  var result = digitGrouping('123456789');
  equal(result, '123,456,789');
});
