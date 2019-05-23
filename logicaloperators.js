alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // alert(1) alerts 1 and returns undefined, whole alert function wull return after first truthy value
//1 2
alert( 1 && null && 2 ); // null (first falsy value)
alert( alert(1) && alert(2) ); // 1 undefined
alert( null || 2 && 3 || 4 ); // 3
if (-1 || 0) alert( 'first' ); //first
if (-1 && 0) alert( 'second' ); // 
if (null || -1 && 1) alert( 'third' ); //  null || 1 = 1 -- > third 