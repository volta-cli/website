# jetson.sh website

This is production repo for the `jetson.sh` website, hosted on Netlify.

The Jekyll theme and all subdomains that use it are in this repo, to easily facilitate cross-site changes.

To test one of the subdomains, run a Jekyll server from its subdirectory. For example:

```sh
cd subdomains/www
bundle exec jekyll serve
```

# Implementation notes

## Directory structure

The Jekyll theme used by the site is in the `theme/` directory.

Each subdomain is in the `subdomains/` subdirectory corresponding to its name.

The `subdomains/www/` subdirectory contains the apex domain (`https://jetson.sh`) as well as the `www.jetson.sh` subdomain (which Netlify redirects to the apex domain).

## Docs structure

The `docs.jetson.sh` site has a sidebar and pagination structure based on the file in `subdomains/docs/_data/sidebar.yml`. If you change the set of pages in the docs site, make sure to update that file accordingly.
