# knc-react-image

A simple react-library to lazy-load images

## Usage

Add to your package like this:

```bash
    npm install --save knc-react-image
```

Or using Yarn:

```bash
    yarn add knc-react-image
```

### Then in your component

```javascript
import Image from 'knc-react-image';

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

Only, one: `react`

## License

MIT.

## About me

Here I am: [https://knc.js.org](https://knc.js.org)

Twitter: [@itsKNC](https://twitter.com/@itsKNC)
