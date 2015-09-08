var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Img = React.createClass({
  getInitialState: function() {
    return {data: [
      {url: "img/img/center.jpg",
      id: "default",
      text: "default"}
    ]};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        Semantic.dimmer.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onClick: function() {
    var value = (this.props.value < this.state.data.length - 1 ? this.props.value * 1 + 1 : 0);
    React.render(
      <Img url='arc/img.json' value={value}/>,
      document.getElementById('img')
    );
  },
  render: function () {
    return (
      <div className="ui image fluid">
        <Semantic.Dimmer className="inverted">
          <div className="content">
            <div className="center">
              <Semantic.Segment className="vertical stripe">
                <div className="ui container content">

                  <Semantic.Header className="huge">
                    {this.state.data[this.props.value].id}
                  </Semantic.Header>
                  <Semantic.Header className="medium">
                    {this.state.data[this.props.value].text}
                  </Semantic.Header>
                  <Semantic.Button className="inverted" onClick={this.onClick}>下一張</Semantic.Button>

                </div>
              </Semantic.Segment>
            </div>
          </div>
        </Semantic.Dimmer>
        <Semantic.Image src={this.state.data[this.props.value].url}></Semantic.Image>
      </div>
    );
  }
});

module.exports = Img;
