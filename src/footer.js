var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Footer = React.createClass({
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
        Semantic.accordion.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  onClick: function() {
    $('body').animate({
      scrollTop: $('.pusher').height()
    }, 200);
  },
  render: function () {
    var List = React.createClass({
      render: function () {
        return (
          <div className="ui container namelist">
            <Semantic.Header className="inverted">
              {this.props.data.text}
            </Semantic.Header>

            <Semantic.List className="inverted link">
              {this.props.data.data.map(function(d) {
                return (
                  <Semantic.Item key={d.name}>
                    {d.id}
                    <div className="right floated content">
                      {d.name}
                    </div>
                  </Semantic.Item>
                );
              })}
            </Semantic.List>
          </div>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical inverted footer">

        <div className="ui container">
          <Semantic.Accordion className="fluid inverted">
            <div className="title" onClick={this.onClick}>
              <div className="ui center aligned container">
                成功大學新鮮人成長營版權所有<br/>
                All Right Reserved © National Cheng Kung University Freshman Camp 2015<br/>
                工作人員名單（點擊顯示）
              </div>
            </div>

            <div className="content">
              <Semantic.Grid className="stackable inverted divided equal height stackable">
                {this.state.data.map(function(d) {
                  return (
                    <div className="two wide column" key={d.id}>
                      {d.data.map(function(d) {
                        return (
                          <List key={d.id} data={d}/>
                        );
                      })}
                    </div>
                  );
                })}
              </Semantic.Grid>
            </div>
          </Semantic.Accordion>
        </div>

      </Semantic.Segment>
    );
  }
});

module.exports = Footer;
