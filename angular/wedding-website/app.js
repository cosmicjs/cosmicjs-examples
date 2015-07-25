/* Cosmic JS copyright 2015 Tony Spiro */

/* Configure
======================== */
var app = {};
app.config = {};
app.config.bucket_slug = "wedding-site";
app.config.url = "https://api.cosmicjs.com/v1";
app.config.mediaurl = "https://cosmicjs.com/uploads";

var cosmicApp = angular.module('cosmicApp',[]);


cosmicApp.directive("goTo", function () {
    return function (scope, element) {
        element.on("click", function (e) {           
            var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 1500, 'easeInOutExpo');
		        e.preventDefault();
        });
    }
});

cosmicApp.controller('mainController', function($scope, $http, $sce) {
   
	$http({
			// Get Cosmic JS content
			url: app.config.url + "/" + app.config.bucket_slug + "/types",
			  method: "GET",
		}).success(function(data, status, headers, config) {
			
			// render html
			$scope.renderHtml = function (htmlCode) {
          return $sce.trustAsHtml(htmlCode);
      };

			$scope.mediaurl = app.config.mediaurl;
			
			/* Section objects bind to slug as key
			==================================== */
			var sections = data.types.sections;

			$scope.section = [];

			sections.forEach(function(section){

				$scope.section[section.slug] = section;

			});

			/* Bridesmaids
			==================================== */
			$scope.bridesmaids = data.types.bridesmaids;

			/* Groomsmen
			==================================== */
			$scope.groomsmen = data.types.groomsmen;

			/* Map
			==================================== */
			setTimeout(function(){
				var venuinfo = $('#venueinfo').html();
				$('#infoBox').html(venuinfo);
			}, 500);

			// Fade in
			$('body').animate({ 'opacity' : '1' });
		
		});

});

