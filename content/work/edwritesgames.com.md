---
title: "Ed Kuehnel Portfolio"
date: 2018-08-30T18:14:41-07:00
tags : [ "CMB2", "WordPress" ]
types : [ "Site" ]
layout: work
type:  "work"
highlight: true
client: [ "Ed Kuehnel" ]
link: "http://edwritesgames.com"
excerpt: "Design and development for the portfolio of a story consultant, narrative designer, and screenwriter."
---

This site was designed to serve as a portfolio and point of contact for [Ed Kuehnel](http://edwritesgames.com/), a story consultant, narrative designer, and screenwriter.

The design was created internally and approved by the client, and I developed the WordPress backend to meet his needs. Some of this project's notable challenges were:

  - Custom post types to manage portfolio items, news micro-feed, and endorsements
  - Metaboxes to make data entry easy for the client
  - Simple, elegant design

As a portfolio and point of contact for clients, the site needed to quickly present information with minimal fuss. Given that my client is an individual and not a company with numerous employees, it was also important that the site be simple and intuitive to update. My client also specifically requested a small, one-line "news micro-feed":

{{% resp src="edwritesgames.com_microfeed.png" alt="News & announcements microfeed" %}}

This feature would allow him to add simple, short updates or links to be displayed on every page of the site. It was implemented through a combination of metaboxes, via [CMB2](https://github.com/WebDevStudios/CMB2), and custom post types.

{{% resp src="edwritesgames.com_work.png" alt="Work section on backend" %}}

In addition to simplifying programming and management, the extensive use of custom post types in the project also provide a clear semantic framework when updating the site: Portfolio items are simply "Work," not some less-intuitive and semantically inaccurate construction such as "posts in the 'work' category."

{{% resp src="edwritesgames.com_project.png" caption="The project creation view." alt="Project creation, backend" %}}

{{% resp src="edwritesgames.com_project_front_end.png" caption="How projects appear on the front end." alt="Project appearance, frontend" %}}