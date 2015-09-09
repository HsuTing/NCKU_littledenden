var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Content = React.createClass({
  getInitialState: function() {
    $('#content').hide();
    $('#content').empty();
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        $('#content').show();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var Article = React.createClass({
      render: function() {
        var img = 'img/change/' + this.props.data.name + '.png';
        return (
          <div className="ui container content">
            <Semantic.Segment className="article raised">

              <Semantic.Segment className="ui container text change">
                <Semantic.Image className="fluid centered" src={img}></Semantic.Image>
                <Semantic.Label className="bottom attached">
                  <Semantic.Header className="huge centered">
                    {this.props.data.name}
                  </Semantic.Header>
                </Semantic.Label>
              </Semantic.Segment>

              <div className="ui container text">
                <Semantic.List className="tiny horizontal relaxed">
                  {this.props.data.info.map(function(d) {
                    return (
                      <div className="item" key={d.head}>
                        <Semantic.Icon className={d.icon}></Semantic.Icon>
                        <div className="content">
                          <Semantic.Header>{d.head}</Semantic.Header>
                          <div className="description">{d.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </Semantic.List>
              </div>
              <br/><br/>

              {this.props.data.data.map(function(d) {
                return (
                  <div className="ui fluid container" key={d.head}>
                    <Semantic.Header className="medium">
                      {d.head}
                    </Semantic.Header>
                    <Semantic.Divider className="clearing"></Semantic.Divider>

                    {d.text.map(function(d) {
                      return (
                        <p className="gray" key={d}>{d}</p>
                      );
                    })}
                    <br/><br/>
                  </div>
                );
              })}
            </Semantic.Segment>
          </div>
        );
      }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        {this.state.data.map(function(d) {
          return (
            <Article data={d} key={d.id}/>
          );
        })}
      </Semantic.Segment>
   );
  }
});

module.exports = Content;
