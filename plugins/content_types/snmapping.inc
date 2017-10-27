<?php
/**
 *  Panel CTools create panel plugin
 */
$plugin = array(
  'single' => TRUE,
  'title' => t('SN Mapping'),
  'description' => t('SN Mapping'),
  'category' => t('Straight North'),
  'render callback' => 'snmapping_render',
  'admin info' => 'snmapping_listinfo',
  'defaults' => 'Test',
  );


/**
 *  Render Panel
 *  This is for the Request a Quote/Sample Button
 */
function snmapping_render($subtype, $conf, $panel_args, $context = NULL) {

  $display = '<div id="state-info"></div>';

  $block = new stdClass();
  $block->content = $display;
  return $block;
}


