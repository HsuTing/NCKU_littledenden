var React = require('react');
var Header = require('./header.js');
var Home = require('./home.js');
var Footer = require('./footer.js');

(function() {
  React.render(
    <Home/>,
    document.getElementById('img')
  );

  React.render(
    <Footer url='arc/footer.json'/>,
    document.getElementById('footer')
  );
})();
