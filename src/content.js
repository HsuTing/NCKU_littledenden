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

Content.Main = React.createClass({
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
          <Content.One data={this.state.data.tab}/>
        );
      default:
        return (
          <Content.Zero data={this.state.data}/>
        );
     }
  }
});

Content.Zero = React.createClass({
  render: function () {
    //semantic framework
    var Segment = Semantify.Segment;

    return (
      <Segment>
        <p>{this.props.data.text}</p>
      </Segment>
    );
  }
});

Content.One = React.createClass({
  render: function () {
    //semantic framework
    var Menu = Semantify.Menu;
    var Item = Semantify.Item;
    var Segment = Semantify.Segment;

    var tab_count = 0;
    var tab = this.props.data.map(function(d) {
      tab_count = tab_count + 1;
      return (
        <Item id={tab_count} className={d.class} type='link'>
          {d.item}
        </Item>
      );
    });

    var content_count = 0;
    var content = this.props.data.map(function(d) {
      content_count = content_count + 1;
      return (
        <div id={content_count} className='content'>
          <p>{d.text}</p>
        </div>
      );
    });

    return (
      <div>
        <Menu className='top attached tabular'>
          {tab}
        </Menu>
        <Segment className='bottom attached'>
          {content}
        </Segment>
      </div>
    );
  }
});
