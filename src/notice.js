var $ = require('jquery');
var React = require('react');
var Semantic = require('./semantic.js');

var Content = React.createClass({
  getInitialState: function() {
    return {data: {
       info: {
         text: "",
         data: []
       },
       QA: {
         text: "",
         data: []
       }
    }};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        Semantic.dimmer.ready();
        Semantic.accordion.ready();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var Info = React.createClass({
      render: function() {
        return (
          <Semantic.Card>
            <div className="blurring dimmable image">
              <Semantic.Dimmer>
                <div className="content">
                  <div className="center">
                    <a href={this.props.data.url}>
                      <Semantic.Button className="inverted">瞭解詳情</Semantic.Button>
                    </a>
                  </div>
                </div>
              </Semantic.Dimmer>
              <Semantic.Image src={this.props.data.img}></Semantic.Image>
            </div>
            <div className="content">
              <a href={this.props.data.url}>
                <Semantic.Header>
                  {this.props.data.header}
                </Semantic.Header>
              </a>
              <div className="meta">
                <span className="date">{this.props.data.text}</span>
              </div>
            </div>
          </Semantic.Card>
        );
      }
    });

    var Qa = React.createClass({
       render: function() {
         return (
           <div>
             <div className={this.props.data.class}>
               <Semantic.Icon className="dropdown"></Semantic.Icon>
               {this.props.data.Q}
             </div>
             <div className={this.props.data.dataclass}>
               {this.props.data.data.map(function(d) {
                 return (
                   <p key={d.id}>{d.text}</p>
                 );
               })}
             </div>
           </div>
         );
       }
    });

    return (
      <Semantic.Segment className="vertical stripe">
        <div className="ui container content">
          <Semantic.Segment className="article raised">
            <Semantic.Header className="huge">
              {this.state.data.info.text}
            </Semantic.Header>
            <Semantic.Divider className="clearing"></Semantic.Divider>

            <div className="ui special cards">
              {this.state.data.info.data.map(function(d) {
                return (
                  <Info key={d.id} data={d}/>
                );
              })}
            </div>

          </Semantic.Segment>
        </div>

        <div className="ui container content">
          <Semantic.Segment className="article raised">
            <Semantic.Header className="huge">
              {this.state.data.QA.text}
            </Semantic.Header>
            <Semantic.Divider className="clearing"></Semantic.Divider>

            <Semantic.Accordion className="styled fluid">
              {this.state.data.QA.data.map(function(d) {
                return (
                  <Qa key={d.id} data={d}/>
                );
              })}
            </Semantic.Accordion>

          </Semantic.Segment>
        </div>
      </Semantic.Segment>
   );
  }
});

module.exports = Content;
