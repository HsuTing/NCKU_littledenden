(function() {
  React.render(
    React.createElement(TopMenu, {url: "arc/top_menu.json"}),
    document.getElementById('content')
  );

  React.render(
    React.createElement(BodyTab, {url: "arc/empty.json"}),
    document.getElementById('body_tab')
  );

  React.render(
    React.createElement(BodyContent.Zero, {url: "arc/home.json"}),
    document.getElementById('body_content')
  );
})();
