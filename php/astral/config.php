<?php
$config = new stdClass();
$config->bucket_slug = "astral"; // bucket slug
$config->read_key = ""; // leave empty if not required
$config->write_key = ""; // leave empty if not required

$config->url = "https://api.cosmicjs.com/v1/" . $config->bucket_slug;
$config->objects_url = $config->url . "/objects";
$config->media_url = $config->url . "/media";
$config->add_object_url = $config->url . "/add-object";
$config->edit_object_url = $config->url . "/edit-object";
$config->file_url = "https://cosmicjs.com/uploads";
?>