class Comment extends React.Component {
    render() {
        //props to indicate a property passed as parameter
        return (
            <div className="comment">
                <h2 className="commentAuthor">Author: {this.props.Author}</h2>
                {this.props.children}
            </div>
        );
    }
}