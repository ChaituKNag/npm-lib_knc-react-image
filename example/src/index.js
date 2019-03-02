import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-lazy-prefetch';

const list = [
    'https://picsum.photos/600?image=200',
    'https://picsum.photos/600?image=201',
    'https://picsum.photos/600?image=202',
    // 'https://picsum.photos/600?image=203',
    // 'https://picsum.photos/600?image=204',
    // 'https://picsum.photos/600?image=215',
    // 'https://picsum.photos/600?image=206',
    // 'https://picsum.photos/600?image=217',
    // 'https://picsum.photos/600?image=208',
    // 'https://picsum.photos/600?image=209',
    // 'https://picsum.photos/600?image=210',
]

const App = () => {
    return (
        <div style={{
            margin: "0 auto",
            maxWidth: "600px"
        }}>
            {
                list.map(image => <Image key={image} src={image} width={600} height={600}/>)
            }
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));