(function() {
  $(document).ready(function() {

    // Expand / Close Project Details Area
    $('#projectButton').click(function() {
      $('.project-details').slideToggle();
      $('.project-close').toggleClass('closeRotate');
    });

    // Gets the full repo name from the 'data-gh-project' data attribute &
    // fetches data from API
    $('[data-gh-project]').each(function() {
      var $proj = $(this);
      var repo = $proj.data('gh-project');
      $.get('https://api.github.com/repos/' + repo).success(function(data) {
        $proj.find('.fork a').text(data.forks_count);
        $proj.find('.star a').text(data.stargazers_count);
      });
    });

  });
})();
