<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Files
{
    
    private $jsFilePaths = array(
        "public/js/libs/dollar.js",
        "public/js/components/BodyMask.js",
        "public/js/components/TabPanel.js",
        "public/js/components/MenuPanel.js",
        "public/js/components/Panel.js",
        "public/js/components/GridPanel.js",
        "public/js/layouts/MainLayout.js",
        "public/js/layouts/LoginLayout.js",
        "public/js/menus/MainMenu.js",
        "public/js/Application.js"
    );
    
    private $cssFilePaths = array(
        "public/css/resets.css",
        "public/css/structure.css",
        "public/css/theme.css"
    );
    
    private $languageFilePath = "public/js/localizer/";
    
    private $search = array("   ", " ","new", "return", "var", "function", "\r\n", "\n", "\r");
    private $replace = array("", "","new ", "return ", "var ", "function ","", "", "");
    private $comments = "/(?:(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\)\/\/.*))/";
    private $langId;
    private $mode;
    
    public function initFiles($mode,$langId = "en")
    {
        $this->mode = $mode;
        $this->langId = $langId;
        switch(ENVIRONMENT)
        {
            case "development":
                if($this->mode == "js"){
                    $this->loadFile($this->languageFilePath.$this->langId.".js");
                    $this->loadFiles();
                } else if($this->mode == "css"){
                    $this->loadFiles();
                }
                break;
            case 'testing':
            case 'production':
                $this->loadMinified();
                break;
                    
        }
    }
    
    private function loadFiles()
    {
        $files = $this->mode == "js" ? $this->jsFilePaths : $this->cssFilePaths;
        foreach($files as $file)
        {
            $this->loadFile($file);
        }
    }
    
    private function loadFile($file)
    {
        if($this->mode == "js")
            echo "<script src='".base_url($file."?".time())."'></script>";
        else if($this->mode == "css")
            echo "<link rel='stylesheet' type='text/css' href='".base_url($file."?".time())."' />";
    }
    
    private function loadMinified()
    {
        
        if($this->mode == "js")
        {
            echo "<script>";
            echo $this->replaceCtx($this->languageFilePath.$this->langId.".js");
            echo "</script>";
            echo "<script>";
            foreach($this->jsFilePaths as $file)
            {
                echo $this->replaceCtx($file);
            }
            echo "</script>";
        }
        else if($this->mode == "css")
        {
            echo "<style type='text/css'>";
            foreach($this->cssFilePaths as $file)
            {
                echo $this->replaceCtx($file);
            }
            echo "</style>";
        }
        
    }
    
    private function replaceCtx($file)
    {
        $ctx = file_get_contents($file);
        $ctx = preg_replace($this->comments, "", $ctx);
        $ctx = str_replace($this->search, $this->replace, $ctx);
        return $ctx;
    }
    
}