<?php
/* !!!! CONFIGURE !!!!
==================================== */
$config = new stdClass();
$config->bucket_slug = "astral";
$config->read_key = ""; // leave empty if not required
$config->write_key = ""; // leave empty if not required

// Do not edit
$config->url = "https://api.cosmicjs.com/v1/" . $config->bucket_slug;
$config->objects_url = $config->url . "/objects";
$config->media_url = $config->url . "/media";
$config->add_object_url = $config->url . "/add-object";
$config->edit_object_url = $config->url . "/edit-object";
$config->delete_object_url = $config->url . "/delete-object";

$config->file_url = "https://cosmicjs.com/uploads"; 
?>