var sales = 123345;
var course = 'TypeScript';
var is_published = true;
var level;
function render(document) {
    console.log(document);
}
//arrays
var numbers = [1, 2, 3];
// tuples
var user = [1, 'mosh'];
// enums
var Size;
(function (Size) {
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
})(Size || (Size = {}));
var mySize = Size.Small;
console.log(mySize);
