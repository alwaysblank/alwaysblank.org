---
title: "Valet WSL Upload Size Limitation"
date: 2018-09-06T14:59:42-07:00
type: Snippet
description: Fixed a problem with uploading in valet-wsl.
categories: 
  - valet
  - wsl
  - tip
  - configuration
---

I was running into an issue where a project I was serving with [valet-wsl](https://github.com/valeryan/valet-wsl) kept complaining that I was uploading files that were too large (larger than ~2MB). Specifically, I was building something with Statamic and kept getting the following error when uploading an asset:

```bash
The file "file.jpg" exceeds your upload_max_filesize ini directive (limit is 2048 KiB).
```

Eventually I fould my way to [this issue](https://github.com/cpriego/valet-linux/issues/172) on the Linux version of Valet that the WSL version is forked from. The only missing link was which files, exactly, the modify. I ended up modifying the following:

```conf
# /etc/nginx/nginx.conf
client_max_body_size 128M
```

```conf
# /etc/php/7.2/fpm/php.ini
upload_max_filesize 128M
post_max_size 200M
```

After that, I just ran `valet restart` and it worked like a charm.
