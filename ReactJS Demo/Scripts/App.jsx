//import { Comment } from './Components/Comment'

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }

    render() {
        return (
            <div className="commentBox">
                <Comment Author="Christopher Sanchez Coto">
                    Hello ReactJS.NET World!
                </Comment>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}

//data to be passed to the CommentBox component, and then to the Comment component
const data = [
    { Id: 1, Author: 'Daniel Lo Nigro', Text: 'Hello ReactJS.NET World!' },
    { Id: 2, Author: 'Pete Hunt', Text: 'This is one comment' },
    { Id: 3, Author: 'Jordan Walke', Text: 'This is *another* comment' },
];

ReactDOM.render(<CommentBox url="/Home/Comments"/>, document.getElementById('content'));