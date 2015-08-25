(function() {
  React.render(
    <TopMenu url="arc/top_menu.json"/>,
    document.getElementById('top_menu')
  );

  React.render(
    <Content.Main url="arc/home.json"/>,
    document.getElementById('content')
  );
})();
