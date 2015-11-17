/*
 * Bootstrap Image Gallery JS Demo 3.0.1
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global blueimp, $ */

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

    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });

    $('#fullscreen-checkbox').on('change', function () {
        $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
    });

    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

});
