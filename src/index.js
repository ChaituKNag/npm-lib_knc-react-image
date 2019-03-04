const React = require('react');
const {useState, useRef, useEffect} = require('react');

class ReactImage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            src: null,
            imageRef: React.createRef()
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        console.log('event handler called');
        if(this._checkImageVisible()) {
            this.setState({
                src: this.props.src
            });
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidMount() {
        if(this._checkImageVisible()) {
            // image already visible
            this.setState({
                src: this.props.src
            });
        } else {
            // image not visible yet
            window.addEventListener('scroll', this.handleScroll);
        }
    }
    render() {
        const {src, style = {}, width, height} = this.props;
        style.width = width || 600;
        style.height = height || 600;
        
        if(!src) return null;
        return <img src={this.state.src} style={style} ref={this.state.imageRef}/>
    }

    _checkImageVisible() {
        const image = this.state.imageRef.current;
        const imageTop = image.offsetTop;
        const threshold = window.scrollY + (.8 * window.innerHeight);

        return (imageTop < threshold);
    }
}

const ReactImageFn = ({ src, style = {}, width, height}) => {

    const [count, setCount] = useState(0);
    const imageRef = useRef();

    style.width = width || `400px`;
    style.height = height || `600px`;

    useEffect(() => {
        if(_checkImageVisible()) {
            imageRef.current.src = src;
        } else {
            // image not visible yet
            window.addEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScroll(e) {
        console.log('event handler called');
        if(_checkImageVisible()) {
            imageRef.current.src = src;
            window.removeEventListener('scroll', handleScroll);
        }
    }

    
    function _checkImageVisible() {
        const image = imageRef.current;
        const imageTop = image.offsetTop;
        const threshold = window.scrollY + (.8 * window.innerHeight);

        return (imageTop < threshold);
    }

    return (
        <img style={style} ref={imageRef}/>
    );
}

// module.exports = ReactImage;
module.exports = ReactImageFn;