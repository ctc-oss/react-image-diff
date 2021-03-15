# react-image-diff

Compares images, inspired by Github's [image diff view modes](https://github.com/blog/817-behold-image-view-modes).

![](public/img/demo-fade.gif)
![](public/img/demo-swipe.gif)

## Installation

```
npm install react-image-diff
```

## Demo

http://cezary.github.io/react-image-diff/

## Usage

```javascript
import ImageDiff from 'react-image-diff';

const Component = ({original, altered}) => (
  <ImageDiff before={original} after={altered} type="fade" value={.5} slider animation />
);

```

### Props

* `after: string` - url to after image
* `before: string` - url to before image
* `height: number` - height in pixels
* `width: number` - width in pixels
* `type: string` - type of image comparison (enum of `difference | fade | swipe`)
* `value: number` - decimal fraction used to compute transition between before and after images
* `slider: boolean` - add slider control under image to transition manually
* `animation : boolean | object` - animate the transition of the images
  * animation config (set to `true` to simply use the defaults):
    * `start: number` (defaults to `value`) - starting value of animated transition
    * `end: number` (defaults to 1) - ending value of animated transition
    * `step: number` (defaults to 0.02) - animation step
    * `delay: number` (defaults to 50) - milliseconds between animation steps

## License

MIT
