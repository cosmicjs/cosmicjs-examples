<?php

include("curl.php");

$curl = new Curl;

class Cosmic {

  // Construct objects
  private function constructObjects($data){
    
    // Get objects
    $objects = $data->objects;
    $cosmic = new stdClass();
    $cosmic->objects = new stdClass();
    $cosmic->objects->all = $objects;

    foreach($objects as $object){
      
      $slug = $object->slug;
      $type_slug = $object->type_slug;

      if($object->metafields){
        
        $metafields = $object->metafields;
        
        // Construct metafields
        foreach($metafields as $metafield){
          
          $key = $metafield->key;
          $object->metafield[$key] = $metafield;
        }
      }

      // Construct type
      $cosmic->objects->type[$type_slug][] = $object;

      $cosmic->object[$slug] = $object;

    }

    return $cosmic;
  }
  
  // Get all objects
  public function getObjects(){

    global $config, $curl;
    $url = $config->objects_url . "?read_key=" . $config->read_key;
    $data = json_decode($curl->get($url));
    
    $cosmic = $this->constructObjects($data);

    return $cosmic;

  }

  // Get media
  public function getMedia(){

    global $config, $curl;

    $data = json_decode($curl->get($config->media_url));
    return $data->media;

  }

  // Init all
  public function init(){

    $cosmic = $this->getObjects();
    $cosmic->media = $this->getMedia();
    
    return $cosmic;

  }

  // Add object
  public function addObject($params){

    global $config, $curl;
    $data = $curl->post($config->add_object_url, $params);

    return $data;

  }

  // Edit object
  public function editObject($params){

    global $config, $curl;

    $data = $curl->put($config->edit_object_url, $params);

    return $data;

  }

  // Delete object
  public function deleteObject($params){

    global $config, $curl;

    $data = $curl->delete($config->delete_object_url, $params);

    return $data;

  }

}

$cosmic_class = new Cosmic;

// Init everything
$cosmic = $cosmic_class->init();
$cosmic_objects = $cosmic->objects->all;

$cosmic = array();

// Set all metafields to key->value (array)
foreach($cosmic_objects as $object){
  $cosmic[$object->slug] = $object;
  $cosmic[$object->slug]->metafield = array();
  foreach($cosmic[$object->slug]->metafields as $metafield){
    $cosmic[$object->slug]->metafield[$metafield->key] = $metafield->value;
  }
}