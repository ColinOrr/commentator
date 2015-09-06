// Convert <script> containers to <div>
$('script[data-comments]').each(function () {
  $(this).replaceWith('<div data-comments="' + $(this).data('comments') + '"></div>');
});

$('[data-comments]').each(function () {
  React.render(
    <CommentBox source={ $(this).data('comments') } />,
    this
  );
});
