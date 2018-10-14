---
title: 'Ed Kuehnel Portfolio'
date: 2015-07-31T15:00:00-00:00
type: Website
technology:
  - CMB2
  - WordPress
tags:
  - design
  - development
client:
  - 
    name: Ed Kuehnel
    url: http://edwritesgames.com
remote: http://edwritesgames.com
description: Design and development for the portfolio of a story consultant, narrative designer, and screenwriter.
---

This site was designed to serve as a portfolio and point of contact for [Ed Kuehnel](http://edwritesgames.com/), a story consultant, narrative designer, and screenwriter.

The design was created internally and approved by the client, and I developed the WordPress backend to meet his needs. Some of this project's notable challenges were:

- Custom post types to manage portfolio items, news micro-feed, and endorsements
- Metaboxes to make data entry easy for the client
- Simple, elegant design

As a portfolio and point of contact for clients, the site needed to quickly present information with minimal fuss. Given that my client is an individual and not a company with numerous employees, it was also important that the site be simple and intuitive to update. My client also specifically requested a small, one-line "news micro-feed":

![News & announcements microfeed](images/edwritesgames.com/edwritesgames.com_microfeed.png)

This feature would allow him to add simple, short updates or links to be displayed on every page of the site. It was implemented through a combination of metaboxes, via [CMB2](https://github.com/WebDevStudios/CMB2), and custom post types.

![Work section on backend](images/edwritesgames.com/edwritesgames.com_work.png)

In addition to simplifying programming and management, the extensive use of custom post types in the project also provide a clear semantic framework when updating the site: Portfolio items are simply "Work," not some less-intuitive and semantically inaccurate construction such as "posts in the 'work' category."

![Project creation, backend](images/edwritesgames.com/edwritesgames.com_project.png)
_The project creation view._

![Project appearance, frontend](images/edwritesgames.com/edwritesgames.com_project_front_end.png)
_How projects appear on the front end._
