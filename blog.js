// blog.js

entry_list = {};
entry_list[0] = new Entry("Welcome to my blog!","July 13, 2016","This is the first blog post in my blog. You probably won't agree with much I say here, but hopefully you'll keep reading anyway!");
entry_list[1] = new Entry("On space travel...","July 13, 2016","People often make the argument, \"We need to solve all of our problems on Earth before we explore space.\" I couldn't disagree more. Broadening our horizons is the only way for us to put the issues facing humanity into cosmic perspective. In the grand scheme of the universe what are we but coagulated stardust?");
entry_list[2] = new Entry("Pokemon Go","July 13, 2016","Nintendo and Niantic released Pokemon Go to US consumers on July 6, 2016. The game has been an astonishing success, boosting the value of both companies astronomically. I was walking through the Boston Common last night, munching on ten chicken nuggets from Burger King after Motus-sponsored yoga. The spectacle of hundreds of people of every race, age, and gender relentlessly searching the Common for imaginary creatures was awe-inspiring. The augmented reality future is here. We just needed Pokemon to show us the light.");
entry_list[3] = new Entry("On the development of humanity...","July 13, 2016","I have always been fascinated by the evolutionary path taken by human beings to get where we are today. My favorite Youtube channel <a href='https://www.youtube.com/user/Kurzgesagt'>In a Nutshell</a> has a great video that explores this very question. Enjoy! <br><center><iframe width='560' height='315' src='https://www.youtube.com/embed/dGiQaabX3_o' frameborder='0' allowfullscreen></iframe></center>");
entry_list[4] = new Entry("Wednesdays","July 13, 2016","Wednesday are not that fun. They are kind of lame and not that exciting, but hey at least the weekend is soon. #humpday");
entry_list[5] = new Entry("On being sick...","July 15, 2016","I got sick yesterday and missed work. I always think I will be really excited to be sick and not have to go to work or school, but being sick really sucks. I always think, \"Hey, this will be the perfect chance to catch up on TV shows and books.\" Instead I just end up sleeping a lot. I'm glad to be feeling better just in time for Friday and the weekend!");
entry_list[6] = new Entry("Coups","July 18, 2016", "It's pretty crazy that Turkey had a coup last week. According to Wikpedia, the Turkish Republic has had SIX coup attempts. That's insane. The US has never even had one. While the US political system is a complete mess right now I don't think anyone is overly concerned with it being toppled by the military. Even more tragic is that almost 300 civilians lost their lives. I'm reading the first <i>Game of Thrones</i> book right now and I'm reminded of a quote that Ser Jorah tells Daenarys. She asks Ser Jorah about the political situation of her homeland and the relationship between the ruling class and the common people. He says, \"The common people pray for rain, healthy children, and a summer that never ends. It is no matter to them if the high lords play their game of thrones, so long as they are left in peace.\" Although President Erdogan's government is democratically elected, his post-coup crackdown reminds me that even leaders legitimately chosen by the people can be despotic.")
entry_list[7] = new Entry("Official website update launch","August 2, 2016", "After almost a month of relearning Javascript, CSS, and HTML, I am finally ready to launch this update to my website. While it feels far from done, this site looks A LOT better than the old one that I made for my first week of Web Programming class last semester. The first update I want to do is build a web server to hold all of these blog entries so I don't have to reupdate the website everytime I want to add a post. Until I get around to that, I'm pretty excited with how this site looks. Gotta take it one step at all a time. All great journeys begin with the first small lil steps.")
entry_list[8] = new Entry("Long-awaited update","October 1, 2017", "I recognize it has been quite some time since I last updated this blog, but I think that's ok since no one actually reads it. I have been very busy since my last post. I graduated college, explored several professions (software developer, video game design teacher, moving company truck driver, SAT tutor), and started grad school at Tufts. I'm just starting my second month of Tufts' Masters in Innovation & Management program. It has been quite the journey. The program's team-based model is a huge time commitment, but has helped me affirm my desire to take on project management roles once I stop going to school. The program is also equipping me with marketing, finance, and data science skills that will be pivotal to my career in the technology sector. My teammates can be trying, but they're all incredibly motivated and push me to work harder and smarter.<br>My biggest update, however, is that I now officially own <a href='zachzager.com'>zachzager.com</a>. This means big things could be coming as I either continue to develop this site or start from scratch using Wix or Squarespace. A recruiter from Formlabs at the Tufts Career Fair told me I should have an online portfolio, so hopefully this develops into that. Thank you all for being patient. My next post should come in a year and a half...or more.")

function Entry(title, date, post) {
  this.title = title;
  this.date = date;
  this.post = post;
}

var last_open_post;

$(document).ready(function() {

	last_open_post = $(); // initially sets the first post as an empty object

	$.each(entry_list, function (index, value) {
		$('#content').prepend("<div id='entryNumber"+index+"'><h2><a>"+value.title+"</a></h2></div><h4>"+value.date+"</h4><div id='postNumber"+index+"''><p>"+value.post+"</p><hr>"); // add entry onto web page

		$('#postNumber'+index).hide(); // initially, hide full blog post texts
		
		$('#entryNumber'+index).click(function () {
			if ($('#postNumber'+index).is(':visible')) { // if post is visible
				$('#postNumber'+index).hide();
			}
			else {										 // if post is NOT visible
				openPost(index);
			}
		})
	});
});

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
