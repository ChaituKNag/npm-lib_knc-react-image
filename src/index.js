const React = require('react');

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

module.exports = ReactImage;