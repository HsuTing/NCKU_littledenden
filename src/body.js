var Body = React.createClass({
  getInitialState: function() {
    return {data: {
      "text": "",
      "value": "0",
      "tab": []
    }};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        semantic.menu.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    //semantic framework
    var Menu = Semantify.Menu;
    var Item = Semantify.Item;
    var Segment = Semantify.Segment;

    var BodyItem = React.createClass({
      render: function() {
        var BodyItemNodes = this.props.data.tab.map(function (d) {
          return (
            <Item className={d.class} type="link">
              {d.item}
            </Item>
          );
        });

        if(this.props.data.tab.length == 0) {
          if(this.props.data.value == "0") {
            return (
              <Content.Zero data={this.props.data}/>
            );
          }
        }
        else {
          return (
            <Menu className="top attached tabular">
              {BodyItemNodes}
            </Menu>
          );
        }
      }
    });

    return (
      <BodyItem data={this.state.data}/>
    );
  }
});
