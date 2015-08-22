(function() {
  React.render(
    <TopMenu url="arc/top_menu.json"/>,
    document.getElementById('content')
  );

  React.render(
    <Body url="arc/home.json"/>,
    document.getElementById('body')
  );
})();
