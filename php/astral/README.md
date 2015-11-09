#Astral
###PHP Single Page Site

####Get Started
In ```config.php``` set your bucket slug:
```
$config = new stdClass();
$config->bucket_slug = "astral"; // bucket slug
$config->read_key = ""; // leave empty if not required
$config->write_key = ""; // leave empty if not required
```

Set up your local server by running [PHP's built-in web server](http://php.net/manual/en/features.commandline.webserver.php).  Run the following commands in your terminal:

```
cd astral
php -S localhost:8000
```

Go to [http://localhost:8000](http://localhost:8000) in your browser of choice.