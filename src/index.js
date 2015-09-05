var React = require('react');
var Header = require('./header.js');
var Home = require('./home.js');
var Img = require('./img.js');
var School = require('./school.js');
var Notice = require('./notice.js');
var Wellcome = require('./wellcome.js');
var Info = require('./info.js');
var Footer = require('./footer.js');

(function() {
  React.render(
    <Header url='arc/header.json'/>,
    document.getElementById('header')
  );

  React.render(
    <Home url='img/home.svg'/>,
    document.getElementById('img')
  );

  React.render(
    <Footer url='arc/footer.json'/>,
    document.getElementById('footer')
  );
})();
