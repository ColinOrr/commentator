var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", null, this.props.source)
    );
  }
});

// Convert <script> containers to <div>
$('script[data-comments]').each(function () {
  $(this).replaceWith('<div data-comments="' + $(this).data('comments') + '"></div>');
});

$('[data-comments]').each(function () {
  React.render(
    React.createElement(CommentBox, {source:  $(this).data('comments') }),
    this
  );
});
