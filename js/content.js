var Content = {}

Content.Init = function() {
  $('#content').empty();
};

Content.Tab = function() {
//tab init
  $('.content').hide();
  $('.ui.segment.bottom.attached').children('#1').show();
//tab click function
  $('.tab').on('click', function() {
    $('.content').hide();
    $('.ui.segment.bottom.attached').children('#' + $(this).attr('id')).show();
  });
};

Content.Main = React.createClass({displayName: "Main",
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
        Content.Tab();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    switch(this.state.data.value) {
      case "1":
        return (
          React.createElement(Content.One, {data: this.state.data.tab})
        );
      default:
        return (
          React.createElement(Content.Zero, {data: this.state.data})
        );
     }
  }
});

Content.Zero = React.createClass({displayName: "Zero",
  render: function () {
    //semantic framework
    var Segment = Semantify.Segment;

    return (
      React.createElement(Segment, null, 
        React.createElement("p", null, this.props.data.text)
      )
    );
  }
});

Content.One = React.createClass({displayName: "One",
  render: function () {
    //semantic framework
    var Menu = Semantify.Menu;
    var Item = Semantify.Item;
    var Segment = Semantify.Segment;

    var tab_count = 0;
    var tab = this.props.data.map(function(d) {
      tab_count = tab_count + 1;
      return (
        React.createElement(Item, {id: tab_count, className: d.class, type: "link"}, 
          d.item
        )
      );
    });

    var content_count = 0;
    var content = this.props.data.map(function(d) {
      content_count = content_count + 1;
      return (
        React.createElement("div", {id: content_count, className: "content"}, 
          React.createElement("p", null, d.text)
        )
      );
    });

    return (
      React.createElement("div", null, 
        React.createElement(Menu, {className: "top attached tabular"}, 
          tab
        ), 
        React.createElement(Segment, {className: "bottom attached"}, 
          content
        )
      )
    );
  }
});
