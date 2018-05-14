---

title: Cookies, WTF?
description: Example for a reusable Cookie Policy with Settings.

image: /images/splash.jpg

---

Most pages I create use cookies, but every time I struggle again with being verbose about how cookies are used. I want to stop this, at least for my personal projects. This page is my attempt to have a clean ressource which is the base for the **Cookie Policies** I use for other projects.

## Policy Generator

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida tellus dolor, faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

```bash
# Install CLI Tool w/ Yarn
$ > yarn global add @ckies/cli

# Install CLI Tool w/ NPM
$ > npm install -g @ckies/cli
```

Faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

### Cookie Configuration

Faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

```yaml
services:
  - cloudflare
  - gauges
additions:
  - name: example_functional
    info: Example Functional Cookie
    type: functional
    expires: 1y
  - name: example_marketing
    info: Example Marketing Cookie
    type: marketing
    expires: 1y
```

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

### Build HTML Files

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

```bash
$ > ckies \
    --language en \
    --output dist
```

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

## JavaScript Library

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida tellus dolor, faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

### Custom Build Process

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

```javscript
import { ckies } from '@ckies/library'

if ( ckies.useFunctional() ) {
  // Set your cookies
}
```

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien. Faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

### Drop-In Solution

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

```html
<script src="https://cookies.wtf/lib/ckies.min.js"></script>

<script>
  if (ckies.useMarketing()) {
    console.log('Marketing cookies are allowed!')
  }
</script>
```

Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien. Faucibus lacinia lectus tempus auctor. Aenean venenatis, turpis nec dignissim varius, ligula purus imperdiet metus, nec semper sapien.

