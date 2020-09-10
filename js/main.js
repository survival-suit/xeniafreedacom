/*$(document).ready(function(){
	 $('.header').height($(window).height());

})*/

$(function(){
    var header = $('.header').get(0);
    function resizeHeader() {
        header.style.height = window.innerHeight + 'px';
    }
    $(window).on('resize', resizeHeader);
    resizeHeader();
	
	
	var about = $('.about').get(0);
    function resizeAbout() {
        about.style.height = window.innerHeight + 'px';
    }
    $(window).on('resize', resizeAbout);
    resizeAbout();
	
	
	var consulting = $('.consulting').get(0);
    function resizeConsulting() {
        consulting.style.height = window.innerHeight + 'px';
    }
    $(window).on('resize', resizeConsulting);
    resizeConsulting();
	
	
	var courses = $('.courses').get(0);
    function resizeCourses() {
        courses.style.height = window.innerHeight + 'px';
    }
    $(window).on('resize', resizeCourses);
    resizeCourses();
	
	var books = $('.books').get(0);
    function resizeBooks() {
        books.style.height = window.innerHeight + 'px';
    }
    $(window).on('resize', resizeBooks);
    resizeBooks();
});

	$(".navbar a").click(function(){
	$("body,html").animate({
	scrollTop:$("#" + $(this).data('value')).offset().top
	},1000)
	})