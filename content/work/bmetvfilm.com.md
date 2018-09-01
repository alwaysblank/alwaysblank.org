---
title: "Brookwell McNamara Entertainment"
date: 2018-08-30T18:24:47-07:00
tags : ["WordPress", "JavaScript"]
categories : [ "site" ]
layout: work
type:  "work"
highlight: true
client: [ "Strangely Compelling Multimedia, Inc" ]
link: "http://bmetvfilm.com"
excerpt: "Redesign of web presence for Brookwell McNamara film & television production company."
---

This site was created to be the web presence of California-based production company Brookwell McNamara Entertainment, and to highlight their catalog of films and television shows. 

The design was provided to me by my client, and it was my job to develop a WordPress theme to conform to it. Some of the most notable parts of this project were:

- A system based on custom post types and metaboxes to allow for easy creation of new film/television projects
- A password-protected section of the site for in-development projects
- Using AJAX to load additional projects

Making the "project" custom post types easy to update was my primary focus. I achieved this by using a metabox-based system to limit possible "wrong" input, and make "right" input logical and simple. Categories were also used to sort projects as film, TV, or "in development," which dictated where they appeared on the site. Whenever possible, systems were designed to be both functional and semantic. Nearly all text that appears on the site can be customized through the backend by the client: Almost no content is hard-coded into the theme.

{{% resp src="bmetvfilm.com_bmeheader.png" caption="The \"Location\" section of the member metadata." alt="Member location metadata, backend" %}}

{{% resp src="bmetvfilm.com_sparepartsbackend.png" caption="The back-end for the \"projects\" system, which allows for easy entry of all project data. (Not all data is shown here.)" alt="Projects backend" %}}

{{% resp src="bmetvfilm.com_spareparts.png" caption="How the project appears on the web site, and how the data is displayed." alt="Projects frontend" %}}