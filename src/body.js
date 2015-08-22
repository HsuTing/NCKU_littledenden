var Body = React.createClass({
  getInitialState: function() {
    return {data: []};
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
        var BodyItemNodes = this.props.data.map(function (d) {
          return (
            <Item className={d.class} type="link">
              {d.item}
            </Item>
          );
        });

        if(this.props.data.length == 0) {
          return (
            <div>
              <Segment className="bottom attached">
              </Segment>
            </div>
          );
        }
        else {
          return (
            <div> 
              <Menu className="top attached tabular">
                {BodyItemNodes}
              </Menu>
              <Segment className="bottom attached">
              </Segment>
            </div>
          );
        }
      }
    });

    return (
      <BodyItem data={this.state.data}/>
    );
  }
});
