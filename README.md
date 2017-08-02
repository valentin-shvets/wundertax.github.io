# Wundertax

[Github Pages](https://pages.github.com/) site for [Wundertax](http://wundertax.de) homepage. So yes, it uses [Jekyll](https://jekyllrb.com/) as it's template engine.

## Development & Content Management

### Setting up

* Install [Ruby 2.1 or higher](https://www.ruby-lang.org/en/downloads/), if you don't have it already
* Checkout the repository
* Install needed gems
    ```
    bundle install
    ```

### Adding content

There are three types of content that are based on [Jekyll Collections](https://jekyllrb.com/docs/collections/).

You can add, remove and update entries in those collections by simply adding, removing and/or update
[Front Matter](https://jekyllrb.com/docs/frontmatter/) files under their corresponding folders,
with the structure explained next for each type, along with any needed
assets.

**Note**: _Entries in collection appear on the site in the alphabetical order of their filenames._

#### Jobs

Folder: **/_jobs/**

**Note**: _Entries in collection appear on the site in the **reversed** alphabetical order of their filenames._

```
---
title: <put here the title of the position. this will appear in the position box on the page>
href: <put here the url to the document for job description. this will be downloadable upon clicking on job box on the page>
---
```

If you want to host job description document in this repository, add it under assets folder (or better in a respective subfolder),
and use this url format in href above to link to it: `/assets/<sub/folders/if/any/><filename.extention>`

#### Members

Folder: **/_members/**

```
---
name: <put here the member first name. this will appear on top of the photo, above the title, on hover/focus effect>
title: <put here the title of the member in the company. this will appear on top of the photo, below the name, on hover/focus effect>
---
```

Team member photos are PNGs that reside under `/assets/images/members/`. Put member's photo PNG in that folder
and name the file with member `name` used in the Front Matter file above.

#### Products

Folder: **/_products/**

```
---
name: <put here the product name. this will not appear anywhere, but will be used to locate product logo as explained below>
href: <put here the url to the product. this will be the link opened upon clicking on the product logo on the page>
---
```

Product logos are SVGs that reside under `/assets/images/products/`. Put product's logo SVG in that folder
and name the file with product `name` used in the Front Matter file above.

### Styling
* SASS is used to compose the styles, and all reside under `/_sass`, and follow the [BEM](http://getbem.com/) model ;)


### Development Cycle

Jekyll comes with a builtin local server that watches your files, builds the site on changes and serve to you
locally.

```
bundle exec jekyll serve
```

Have fun!
