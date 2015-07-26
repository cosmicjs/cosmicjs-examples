[![Cosmic JS Logo](https://cosmicjs.com/images/marketing/logo-w-brand.jpg)](https://cosmicjs.com/)
##Cosmic JS Driver for PHP

###Getting started
Go to [https://cosmicjs.com](https://cosmicjs.com), create an account and setup a bucket.

Check out [examples/basic/index.php](examples/basic/index.php) in this repo.

```php
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include("includes/cosmic.php");

$cosmic = new Cosmic;
?>
<h2>Add / Edit / Delete</h2>
<h4>Add</h4>
<?php

/* Add
================================= */
$object_string = '{
	"type_slug" : "pages",
	"title" : "Test Title",
	"content" : "here is some test content",
	"write_key" : "' . $config->write_key . '"
}';
$object = $cosmic->addObject($object_string);
echo "<pre>";
var_dump(json_decode($object));
echo "</pre>";
?>
<br><br>
<h4>Edit</h4>
<?php

/* Edit
================================= */
$object_string = '{
	"slug" : "test-title",
	"title" : "New Title",
	"content" : "here is some NEW test content",
	"write_key" : "' . $config->write_key . '"
}';
$object = $cosmic->editObject($object_string);
echo "<pre>";
var_dump(json_decode($object));
echo "</pre>";
?>
<br><br>
<h4>Delete</h4>
<?php

/* Delete
================================= */
$object_string = '{
	"slug" : "test-title",
	"write_key" : "' . $config->write_key . '"
}';
$object = $cosmic->deleteObject($object_string);
echo "<pre>";
var_dump(json_decode($object));
echo "</pre>";

?>
<h2>Get</h2>
<?php

/* Get
================================= */

// Objects
$cosmic = $cosmic->init();
$cosmic_objects = $cosmic->objects->all;
foreach($cosmic_objects as $object){
	?>
	<h3><?php echo $object->title; ?></h3>
	<?php echo $object->content; ?><br>
	<?php
}
?>
<h2>Media</h2>
<?php
// Media
$cosmic_media = $cosmic->media;
foreach($cosmic_media as $media){
	?>
	<img src="https://cosmicjs.com/uploads/<?php echo $media->name; ?>?dim=200"><br>
	<?php
}
?>
```
