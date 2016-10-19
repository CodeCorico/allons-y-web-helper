{
  "routes": {
    "/test3": {
      "title": "Mon test",
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