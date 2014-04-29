<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Files
{
    private $jsFilePaths = array(
        "assets/js/libs/handlebars.js",
        "assets/js/libs/md5.js",
        "assets/js/libs/dollar.js",
        "assets/js/components/BodyMask.js",
        "assets/js/controllers/UserController.js"
    );
    
    private $cssFilePaths = array();
    
    public function initFiles($mode)
    {
        switch(ENVIRONMENT)
        {
            case "development":
                if($mode == "js")
                    $this->loadFiles($mode);
                else if($mode == "css")
                    $this->loadFiles($mode);
                break;
            case 'testing':
            case 'production':
                if($mode == "js")
                    $this->loadFile ($mode, "app-min.js");
                else if($mode == "css")
                    $this->loadFile($mode, "app-min.css");
                break;
                    
        }
    }
    
    private function loadFiles($mode, $txt)
    {
        $ctx = file_get_contents($txt);
        $files = explode("\n", $ctx);
        foreach($files as $file)
        {
            $this->loadFile($mode, $file);
        }
    }
    
    private function loadFile($mode, $file)
    {
        if($mode == "js")
            echo "<script src='".base_url($file."?".time())."'></script>";
        else if($mode == "css")
            echo "<link rel='stylesheet' type='text/css' href='".base_url($file."?".time())."' />";
    }
    
    private function loadMinified($mode)
    {
        
    }
    
}