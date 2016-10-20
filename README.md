# Allons-y-web-helper

[![Join the chat at https://gitter.im/CodeCorico/allons-y](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CodeCorico/allons-y?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Issue Stats](http://issuestats.com/github/codecorico/allons-y-web-helper/badge/issue)](http://issuestats.com/github/codecorico/allons-y)
[![Issue Stats](http://issuestats.com/github/codecorico/allons-y-web-helper/badge/pr)](http://issuestats.com/github/codecorico/allons-y)
[![npm version](https://badge.fury.io/js/allons-y-web-helper.svg)](https://badge.fury.io/js/allons-y-web-helper)

Allons-y-web-helper is an [allons-y](https://github.com/CodeCorico/allons-y) module that helps designers by creating fake data & pages into json files.

## Wiki

The documentation, wiki and every Allons-y-web-helper resources can be found in the [Allons-y.io platform](http://allons-y.io).

## Configuration example

```json
{
  "routes": {
    "/test": {
      "title": "My test",
      "requires": ["test"]
    }
  },
  "components": {
    "web-create-layout": {
      "sections": [{
        "title": "Articles",
        "links": [{
          "url": "/wiki/create",
          "image": "",
          "title": "Blank article",
          "description": "Start with a blank page."
        }, {
          "title": "Groups",
          "links": [{
            "url": "/groups/create",
            "image": "",
            "title": "Empty group",
            "description": "Start a new empty group."
          }]
        }]
      }]
    }
  }
}
```

## Want to help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our [guidelines for contributing](CONTRIBUTING.md) and then check out one of [our issues](https://github.com/CodeCorico/allons-y-web-helper/issues).