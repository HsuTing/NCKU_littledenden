(function() {
  React.render(
    React.createElement(TopMenu, {url: "arc/top_menu.json"}),
    document.getElementById('top_menu')
  );

  React.render(
    React.createElement(Body, {url: "arc/home.json"}),
    document.getElementById('body')
  );
})();
