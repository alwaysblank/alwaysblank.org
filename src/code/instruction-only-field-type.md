---
title: "Instruction Only Fieldtype"
date: 2018-08-29T15:36:13-07:00
lastmod: 2018-08-29T15:36:13-07:00
type: Snippet
categories:
  - addon
  - fieldtype
technology:
  - Statamic
description: Simple text-only "field" for Statamic's control panel.
---

I needed a quick fieldtype that would allow me to enter some arbitrary text to show to the user that was not attached to an actual input field. A slightly hacky version of this wasn't hard to achieve:

```php
// addons/Exposition/ExpositionFieldtype.php

namespace Statamic\Addons\Exposition;

use Statamic\Extend\Fieldtype;

class ExpositionFieldtype extends Fieldtype
{
    // This addon saves no data
}
```

```js
// addons/Exposition/resource/assets/js/fieldtype.js
Vue.component('exposition-fieldtype', {

    mixins: [Fieldtype],

    template: '<small :class="class" style="white-space:pre-line;">{{message}}</small>',

    data: function() {
        console.log(this.config.message);
        return {
            message: this.config.message,
            class: "help-block"
        };
    },

});
```

This isn't the most impressive or flexible implementation (for instance, it doesn't support any kind of HTML tags, which means no _italics_ or **bold**), but for now it does what it needs to.
