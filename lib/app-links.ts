/**
 * Single source of truth for the mobile app's store listings.
 *
 * Both are empty until the listings go live. Every badge in the app reads from
 * here, so publishing is a one-line change in one file — the badges render
 * identically either way and simply stop navigating while a URL is missing.
 */
export const APP_STORE_URL = "";
export const GOOGLE_PLAY_URL = "";
