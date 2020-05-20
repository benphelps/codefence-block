<?php
/**
 * codefence.io Gutenberg Block
 *
 * @package Codefence
 * @author codefence.io
 * @copyright 2020 codefence.io
 * @license GNUGPLv3
 *
 * @wordpress-plugin
 * Plugin Name: codefence.io
 * Plugin URI: https://codefence.io/
 * Description: Embed runnable code blocks directly into your website.
 * Version: 1.0.0
 * Author: codefence.io
 * Author URI: https://codefence.io/
 * License: GNUGPLv3
 */

if ( !class_exists( 'Codefence' ) ) {
    class Codefence
    {
        public static function init() {
            function codefence_register_block() {
                $asset_file = include(plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
                wp_register_script(
                    'codefence',
                    plugins_url( 'build/index.js', __FILE__ ),
                    $asset_file['dependencies'],
                    $asset_file['version']
                );
                register_block_type('codefence/codefence', array(
                    'editor_script' => 'codefence',
                ));
            }

            function codefence_skip_texturize( $tags ) {
                $tags[] = 'textarea';
                $tags[] = 'code-fence';
                return $tags;
            }

            wp_enqueue_script('codefence-js', 'https://codefence.io/codefence.js', [], false, true);
            wp_enqueue_style('codefence-css', 'https://codefence.io/codefence.css');
            add_action('init', 'codefence_register_block');
            add_filter( 'no_texturize_tags', 'codefence_skip_texturize' );
        }
    }

    Codefence::init();
}
