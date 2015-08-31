module.exports = function () {
  var $ = require('jquery');
  var React = require('react');
  var Semantic = require('./semantic.js');

  var Header = React.createClass({
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
          Semantic.menu.ready();
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function () {
      var SubItem = React.createClass({
        render: function() {
          return (
            <Semantic.Item>
              {this.props.data.text}
            </Semantic.Item>
          );
        }
      });

      var SubMenu = React.createClass({
        render: function() {
          return (
            <div className="menu">
              {this.props.data.map(function(d) {
                return (
                  <SubItem key={d.id} data={d}/>
                );
              })}
            </div>
          );
        }
      });

      var Item = React.createClass({
        render: function() {
          if(this.props.data.submenu.length == 0) {
            return (
              <Semantic.Item className={this.props.data.class} type="link">
                {this.props.data.text}
              </Semantic.Item>
            );
          }
          else {
            return (
              <Semantic.Item className={this.props.data.class} type="link">
                {this.props.data.text}
                <SubMenu data={this.props.data.submenu}/>
              </Semantic.Item>
            );
          }
        }
      });

      return (
        <Semantic.Menu className="secondary">
          <Semantic.Menu className="main right secondary">
            {this.state.data.map(function(d) {
              return (
                <Item key={d.id} data={d}/>
              );
            })}
          </Semantic.Menu>
        </Semantic.Menu>
      );
    }
  });

  return (
    React.render(
      <Header url="arc/header.json"/>,
      document.getElementById('header')
    )
  );
};
