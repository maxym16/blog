<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
//define('DB_NAME', 'forever6_openbl');
define('DB_NAME', 'openbl');

/** MySQL database username */
//define('DB_USER', 'forever6_openbl');
define('DB_USER', 'root');

/** MySQL database password */
//define('DB_PASSWORD', 'S]-p5i939B');
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'hiogt9mbsyfbryi8fgo5otbouesq9npj7gpzz8jzv6jvbga9rlaz1txb2tvegtxy');
define('SECURE_AUTH_KEY',  'ie3hl8yy2qi8rn9cox4uocofuh43ts6hwjy5prztaghqzqi6vdisspxnc8zkvkdu');
define('LOGGED_IN_KEY',    '6opmmre0binvsrs5o8ucnx89612intazn5kcwzsevnxk5sgwbms8o0dtmtyu3uqp');
define('NONCE_KEY',        '5xqob1fe6pllzti33hmylutqgxznxgonsmoet78bgaz9ydrkwithim2e7nyoxazn');
define('AUTH_SALT',        '2aelluxt12d8cd3d1prniciceklz2rrhnan4hhodguyfw29r6htwom7sc27wbywr');
define('SECURE_AUTH_SALT', 'q6gflt7f4m59kefhsfvrhg9vp584nke8tv4g8cnsbar93cfuilztm6l9t9bkkvqp');
define('LOGGED_IN_SALT',   'veykddsyozevcmdbxbafgylvzslamoitsfljtjteilx9otvfjsyvzf0vpwig2xpl');
define('NONCE_SALT',       'sk9qya9tnljpipiksqqa4ctrqqmvtnm6kqqv2hkstohkjhb0skgbwdlhzuzfpwlz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wpet_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define( 'WP_MEMORY_LIMIT', '128M' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

# Disables all core updates. Added by SiteGround Autoupdate:
define( 'WP_AUTO_UPDATE_CORE', false );
