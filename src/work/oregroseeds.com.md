---
title: Oregro Seeds
date: 2018-12-10T15:00:00-00:00
type: Website
remote: https://oregroseeds.com/
description: New site for local grass seed supplier.
tags:
  - development
technology:
  - Statamic
client:
  -
    name: Murmur Creative
    url: https://murmurcreative.com
  -
    name: Oregro Seeds
    url: https://oregroseeds.com/
---
This site was created to replace an older, outdated site. The primary function of the site is to inform visitors of the wide range of products OreGro, Inc. offers, as well as provide background on the company itself.

I wasn't directly involved in the initial design of this site; In my capacity as an in-house developer for Murmur Creative, I was given an already-approved design for implementation. On this project, we split development up into front-end and back-end; I built the underlying structure and customized the back-end while one of my co-workers assembled the CSS and JavaScript for the front-end. The size of the Murmur development team and our tight schedules usually mean this type of collaboration isn't possible, for the stars aligned for this project and it resulted in a much, much shorter turnaround that usual--I'm hoping to use the same or a similar process for additional projects in the future.

To help the client with organizational tasks, this site includes special repositories for staff members (for the staff directory) and the products in their catalog.

OreGro sells a large number of varieties of grass seed, which have different uses, planting times, qualities, etc. In short, each product needed to include a significant amount of metadata. I wanted this data to be structured, so that it could be understood on some level by a machine, but also be accessible via a UI that would make sense to a human user. The data storage and UI features of Statamic made this relatively straightfoward: Instead of having to determine how to actuall store and query data, I just had to consider how I wanted it oganized, and how I wanted people to interact with it.

![Product, back-end primary tab](images/oregroseeds.com/product.png)
_The primary product tab on the backend, showed description, variety, and some metadata._

![Product, back-end details tab](images/oregroseeds.com/product-details.png)
_One of the product "details" sections. A user can add an arbitrary number of these._

![Product, back-end trials tab](images/oregroseeds.com/product-trials.png)
_Some products were involved in trials with competing products: This is a UI to record the results of those trials._

![Product, front-end](images/oregroseeds.com/product-frontend.jpg)
_And example of how all the backend metadata comes together for a visitor to the website._

Although not as involved, the staff directory also requires some metadata, such as phone numbers or email addresses. This section is intended to be flexible, adapting to whether or not a given staff person has a cell phone and/or office phone, etc. It doesn't offer more advanced functionality (i.e. granular searches for user metadata or separate of first and last names), but it serves the purpose of familiarizing visitors with the staff at OreGro and giving those visitors ways to get in touch with staff members.


![Staff, back-end](images/oregroseeds.com/staff-backend.png)
_A view of the back-end UI for editing or creating staff members._

![Staff, front-end](images/oregroseeds.com/staff-frontend.jpg)
_How a staff member appears on the site to a visitor._

(Sadly, so far as I know Dwayne "The Rock" Johnson is not actually an OreGro employee.)
