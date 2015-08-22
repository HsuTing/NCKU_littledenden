(function() {
  React.render(
    <TopMenu url="arc/top_menu.json"/>,
    document.getElementById('content')
  );

  React.render(
    <BodyTab url="arc/empty.json"/>,
    document.getElementById('body_tab')
  );

  React.render(
    <BodyContent.Zero url="arc/home.json"/>,
    document.getElementById('body_content')
  );
})();
