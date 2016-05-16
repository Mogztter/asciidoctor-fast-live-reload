var area = document.getElementById('textarea');
var output = document.getElementById('output');
var currentHTML = '';
var currentLines = [];
var options = Opal.hash2(['doctype', 'attributes'], {doctype: 'article', attributes: ['showtitle']});
var result = Opal.Asciidoctor.$convert("Asciidoctor is *fast*", options);
console.log(result);
area.addEventListener('input', function() {
  var diffLines = [];
  var content = area.value;
  var lines = content.split('\n');
  lines.forEach(function(element, index) {
    if (currentLines.length < index || element !== currentLines[index]) {
      diffLines.push(element);
    }
  });
  console.log(diffLines); 
  currentLines = lines;
  var options = Opal.hash2(['doctype', 'attributes'], {doctype: 'article', attributes: ['showtitle']});
  var doc = Opal.Asciidoctor.$load(content, options);
  console.log(doc);
  var html = doc.$convert(options);
  output.innerHTML = html;
  currentHTML = html;
}, false);
