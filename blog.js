// blog.js

var last_open_post;

$(document).ready(function() {
	// pulls blog entries from server
	var url = "https://blog-entries.herokuapp.com/";
	$.get(url, function(data) {
		buildEntries(data);
	});
});

function buildEntries(data) {
	last_open_post = $(); // initially sets the first post as an empty object

	$.each(data, function (index, value) {
		$('#content').prepend("<div id='entryNumber"+index+"'><h2><a>"+value.title+"</a></h2></div><h4>"+value.date+"</h4><div id='postNumber"+index+"''><p>"+value.post+"</p><hr>"); // add entry onto web page

		$('#postNumber'+index).hide(); // initially, hide full blog post texts
		
		$('#entryNumber'+index).click(function () {
			// if post is visible
			if ($('#postNumber'+index).is(':visible')) {
				$('#postNumber'+index).hide();
			}
			// if post is NOT visible
			else {	
				openPost(index);
			}
		})
	});
}

function openPost(index) {
	last_open_post.hide(); // hide last open post
	$('#postNumber'+index).show(); // show clicked/selected post
	last_open_post = $('#postNumber'+index); // stores the selected post to be closed upon next selection
	
	scrollToTop(index);
}

// scrolls selected post to top of the screen
function scrollToTop(index) {
	$('html, body').animate({
		scrollTop: $('#entryNumber'+index).offset().top
	}, 1000);
}
