# vue-filter-pretty-bytes
Vue 2 Filter to prettify bytes

### Install

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


### Usage

```
{{ 15364878 | prettyBytes }}
```
Return: 15.36 MB

#### everywhere like methods, etc...

```
this.$options.filters.prettyBytes(15364878)

```


### Options

Decimals and [KiB](https://en.wikipedia.org/wiki/Kibibyte)

Decimals - Integer
```
{{ 15364878 | prettyBytes(1) }}
```
Return: 15.4 MB

KiB - Boolean
```
{{ 15364878 | prettyBytes(1, true) }}
```
Return: 14.7 MiB
