<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Files
{
    private $jsFilePaths = array(
        "assets/js/libs/dollar.js",
        "assets/js/components/BodyMask.js",
        "assets/js/components/TabPanel.js",
        "assets/js/components/Panel.js"
    );
    
    private $cssFilePaths = array(
        "assets/css/resets.css",
        "assets/css/structure.css",
        "assets/css/theme.css"
    );
    
    private $search = array("   ", " ","new", "return", "var", "function", "\r\n", "\n", "\r");
    private $replace = array("", "","new ", "return ", "var ", "function ","", "", "");
    private $comments = "/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\)\/\/.*))/";
    
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
                $this->loadMinified($mode);
                break;
                    
        }
    }
    
    private function loadFiles($mode)
    {
        $files = $mode == "js" ? $this->jsFilePaths : $this->cssFilePaths;
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
        
        if($mode == "js")
        {
            echo "<script>";
            foreach($this->jsFilePaths as $file)
            {
                $ctx = file_get_contents($file);
                $ctx = preg_replace($this->comments, "", $ctx);
                $ctx = str_replace($this->search, $this->replace, $ctx);                
                echo $ctx;
            }
            echo "</script>";
        }
        else if($mode == "css")
        {
            echo "<style type='text/css'>";
            foreach($this->cssFilePaths as $file)
            {
                $ctx = file_get_contents($file);
                $ctx = preg_replace($this->comments, "", $ctx);
                $ctx = str_replace($this->search, $this->replace, $ctx);
                echo $ctx;
            }
            echo "</style>";
        }
        
    }
    
}