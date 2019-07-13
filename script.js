$("#video-modal").append('<div class="video-modal-container"></div><button class="video-modal-close"><span>close modal</span></button><span class="video-modal-overlay"></span>');

function popYouTubeId(buttonid) {
    var youTubeUrl = $(buttonid).attr('data-video');
    var youTubeId;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = youTubeUrl.match(regExp);
    if (match && match[2].length == 11) {
        youTubeId = match[2];
    } else {
        youTubeId = 'no video found';
    }
    $('.video-modal-container').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + youTubeId + '?autoplay=1&loop=1&playlist=' + youTubeId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>');
    $('.video-modal-close, .video-modal-overlay').click( function(){
        $('.video-modal-container').empty();
        $('#video-modal').removeClass('launched');
    });
}

var buttonid;

$('.modal-video').click( function(){
	buttonid = '#'+$(this).attr('id');
  popYouTubeId(buttonid);
  
  $('#video-modal').addClass('launched');
});