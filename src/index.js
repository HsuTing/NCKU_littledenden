var React = require('react');
var Header = require('./header.js');
var School = require('./school.js');
var Notice = require('./notice.js');
var Info = require('./info.js');
var Footer = require('./footer.js');

(function() {
  React.render(
    <Header url='arc/header.json'/>,
    document.getElementById('header')
  );

  React.render(
    <Info url='arc/info.json'/>,
    document.getElementById('content')
  );

  React.render(
    <Footer url='arc/footer.json'/>,
    document.getElementById('footer')
  );
})();
