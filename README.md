# react-image-lazy-prefetch

A simple react-library to lazy-load or prefetch images

## Usage

Add to your package like this:

```bash
    npm install --save react-image-lazy-prefetch
```

Or using Yarn:

```bash
    yarn add react-image-lazy-prefetch
```

### Then in your component

```javascript
import Image from 'react-image-lazy-prefetch';

const MyComp = () => {
    const imgSrc=`https://picsum.photos/200/300`
    return <Image src={imgSrc} />
}
```

### Optional parameters

You can add the below optional params:

- `style` - the styles that you want on the resultant image (`img`) tag
- `width` - the width of the resultant image
- `height` - the height of the resultant image

## Peer dependency

Only, one: `react` (latest if possible).

## License

MIT.

## About me

Here I am: [https://knc.js.org](https://knc.js.org)

Twitter: [@itsKNC](https://twitter.com/@itsKNC)
