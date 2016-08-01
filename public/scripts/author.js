var AuthorBox = React.createClass({
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data:data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    // initializing state (when state updates, the component re-renders itself)
    getInitialState: function() {
        return {data: []};
    },
    // automatically called by React after a component is rendered for the 1st time
    componentDidMount: function() {
        setInterval(this.loadCommentsFromServer, 100);
    },

    render: function(){
        return (
            <div>
                <Author data={this.state.data} />
            </div>
        );
    }

})

var Author = React.createClass({
    render:function(){
        var comments = this.props.data.map(function(comment){
            return <Item key = {comment.id} author = {comment.author}>{comment.content}</Item>
        });
        return (
            <div>
                {comments}
            </div>
        );
    }
});

var Item = React.createClass({
    render: function(){
        return (
            <div class="row">
                <div class="comment col-sm-6">
                    <h2>{this.props.author}</h2>
                    <p>
                        {this.props.children}
                    </p>
                </div>
                <div class="picture col-sm-5">
                    <img src="img/profile1.png"/>
                </div>
            </div>
        );
    }
})

ReactDOM.render(<AuthorBox url="../comment.json"/>, document.querySelector('.authorMAD'));
