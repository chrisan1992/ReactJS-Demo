class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.map(comment => (
            <Comment Author={comment.Author} key={comment.Id}>
                {comment.Text}
            </Comment>
        ));
        return <div className="commentList">{commentNodes}</div>;
    }
}