##Cosmic JS Bootstrap Image Gallery - [Demo](http://tonyspiro.com/dev/cosmicjs-examples/cosmicjs-image-gallery/)

This is a demo image gallery built using the [Bootstrap Image Gallery by blueimp](https://github.com/blueimp/Bootstrap-Image-Gallery).  The images are provided via the Cosmic JS content platform API using a simple ajax call.

####Getting Started
Check out `js/demo.js` to see how the images are being served from the Cosmic JS content platform API:
```javascript
$(function () {
    'use strict';
    var api_url = 'https://api.cosmicjs.com/v1/cosmic-js-image-gallery/object-type/gallery';

    // Load demo images from flickr:
    $.getJSON(api_url).done(function (result) {
        var linksContainer = $('#links'),
            url;
        // Add the demo images as links with thumbnails to the page:
        $.each(result.objects, function (index, photo) {
            url = 'https://cosmicjs.com/uploads/' + photo.metafields[0].value + '?dim=400';
            var url_big = 'https://cosmicjs.com/uploads/' + photo.metafields[0].value;
            $('<a/>')
                .append($('<div style="display: inline-block; width: 200px; height: 150px; background-image: url(' + url + '); background-size: cover; background-position: center center;"/>'))
                .prop('href', url_big)
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
        });
    });
...
});
```
