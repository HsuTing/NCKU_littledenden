(function() {
  React.render(
    <TopMenu url="arc/top_menu.json"/>,
    document.getElementById('top_menu')
  );

  React.render(
    <Body url="arc/home.json"/>,
    document.getElementById('body')
  );
})();
