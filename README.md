# vue-filter-pretty-bytes
Vue 2 Filter to prettify bytes

### Vue 3 Notes
Vue 3 remove filters, and thats a good thing!!!

Use any JS script, recomended: pretty-bytes: https://www.npmjs.com/package/pretty-bytes

```javascript
<script setup lang="ts">
import prettyBytes from 'pretty-bytes'
</script>
<template>
  <div>
    {{ prettyBytes(51254) }}
  </div>
</template>
```

## Install

Available through npm as `vue-filter-pretty-bytes`, or include as an inline script.

```
import Vue from 'vue'
import vueFilterPrettyBytes from 'vue-filter-pretty-bytes'

Vue.use(vueFilterPrettyBytes)
```
or

```
Vue.use(require('vue-filter-pretty-bytes'))
```


## Usage

```
{{ 15364878 | prettyBytes }}
```
Return: 15.36 MB

#### everywhere like methods, etc...

```
this.$options.filters.prettyBytes(15364878)

```


## Options

Decimals and [KiB](https://en.wikipedia.org/wiki/Kibibyte)

### Decimals - Integer
```
{{ 15364878 | prettyBytes(1) }}
```
Return: 15.4 MB

### KiB - Boolean
```
{{ 15364878 | prettyBytes(1, true) }}
```
Return: 14.7 MiB

### Max Unit

#### Normal
```
{{ 15364878 | prettyBytes(1, false, 'KB') }}
```

Options: 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB'

Return: 15364.9 KB


#### KiB
```
{{ 15364878 | prettyBytes(1, true, 'KiB') }}
```

Options: 'Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB', 'BiB'

Return: 15004.8 KiB
