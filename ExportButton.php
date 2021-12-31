<?php

namespace aayushmhu\htmltocsv;
use yii;

/**
 * @author Aayush Saini <aayushsaini9999@gmail.com>
 */
class ExportButton extends \yii\bootstrap4\Button {

    const DEFAULT_BUTTON = 'aayushmhu-exportbtn';
    const EXPORT_EXCEL = 1;
    const EXPORT_CSV = 2;
    public $tableid;
    public $cssFile = '';
    public $mainJSFile = '';
    public $type = self::EXPORT_EXCEL;
    public $filename = 'HTMLTOEXPORT_AAYUSHMHU';
    public $buttonid = self::DEFAULT_BUTTON;

    /**
     * Auto Run Function
     *
     * @return void
     */
    public function run() {
        $this->cssFile = dirname(__DIR__).'/yii2-htmltocsv/assets/default.css';
        $this->mainJSFile = dirname(__DIR__).'/yii2-htmltocsv/assets/main.js';
        $view = $this->getView();
        $this->buttonid = $this->options['id'];

        $view->registerJs(file_get_contents($this->mainJSFile));

        if($this->type == self::EXPORT_EXCEL){
            $exportjs = "
                $('#{$this->buttonid}').click(function (event) {
                        generateExcel($('#{$this->tableid}'),'{$this->filename}');
                    });
                ";
        }else if($this->type == self::EXPORT_CSV){
            $exportjs = "
            $('#{$this->buttonid}').on('click', function (event) {
                generateCSV.apply(this, [$('#{$this->tableid}'), '{$this->filename}']);
            });";
        }

        $view->registerCss(file_get_contents($this->cssFile));
        $view->registerJs($exportjs);        
        
        return parent::run();
    }

}

