---
title: "Valet WSL Upload Size Limitation"
date: 2018-09-06T14:59:42-07:00
tags : [ "configuration", "troubleshooting"]
categories : [ "valet", "wsl", "tip" ]
layout: post
type:  "post"
highlight: true
---

I was running into an issue where a project I was serving with [valet-wsl](https://github.com/valeryan/valet-wsl) kept complaining that I was uploading files that were too large (larger that ~2MB). Specifically, I was building something with Statamic and kept getting the following error when uploading an asset:

```bash
The file "file.jpg" exceeds your upload_max_filesize ini directive (limit is 2048 KiB).
```

Eventually I fould my way to [this issue](https://github.com/cpriego/valet-linux/issues/172) on the Linux version of Valet that the WSL version is forked from. The only missing link was which files, exactly, the modify. I ended up modifying the following:

## `/etc/nginx/nginx.conf`

To this I added:

```conf
client_max_body_size 128M
```

## `/etc/php/7.2/fpm/php.ini`

To this I added:

```conf
upload_max_filesize 128M
post_max_size 200M
```

After that, I just ran `valet restart` and it worked like a charm.