var AuthorBox = React.createClass({
    // refresh front-end view data without refreshing the whole page.
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data: data});
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
                <AuthorList data={this.state.data} />
            </div>
        );
    }
});

var AuthorList = React.createClass({
    render: function(){
        var comments = this.props.data.map(function(comment, index){
            if(index == 0){
                return <ItemActive key={comment.id} image = {comment.profile_src} author={comment.name}>{comment.short_description}</ItemActive>
            }
            else{
                return <Item key={comment.id} image = {comment.profile_src} author={comment.name}>{comment.short_description}</Item>
            }
        });
        return (
            <div>
                {comments}
            </div>
        );
    }
});

var ItemActive = React.createClass({
    render: function(){
        return (
        <div className="col-sm-12 col-md-12 item active">
            <a href = "/single"><img src={this.props.image}/></a>
            <h3>
              {this.props.author}
            </h3>
            <p>
                {this.props.children}
            </p>
        </div>
        );
    }
});

var Item = React.createClass({
    render: function(){
        return (
            <div className="col-sm-12 col-md-12 item">
                <a href ="/single"><img src={this.props.image}/></a>
                <h3>
                  {this.props.author}
                </h3>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
});


var AuthorBoxCarouselVersion = React.createClass({
    // refresh front-end view data without refreshing the whole page.
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({data: data});
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
                <AuthorListCarouselVersion data={this.state.data}/>
            </div>
        );
    }
});

var AuthorListCarouselVersion = React.createClass({
    render: function(){
        var comments = this.props.data.map(function(comment, index){
            if (index == 0){
                return <ItemActive key={comment.id} image = {comment.profile_src} author={comment.name}>{comment.short_description}</ItemActive>
            }
            else{
                return <Item key={comment.id} image = {comment.profile_src} author={comment.name}>{comment.short_description}</Item>
            }
        });
        return (
            <div id="myCarousel_MAD" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    {comments}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<AuthorBox url="../MAD_comment.json"/>, document.querySelector('.authorMAD'));
ReactDOM.render(<AuthorBox url="../web_comment.json"/>, document.querySelector('.authorWeb'));
ReactDOM.render(<AuthorBox url="../c4e_comment.json"/>, document.querySelector('.authorC4E'));

ReactDOM.render(<AuthorBoxCarouselVersion url="../MAD_comment.json"/>, document.querySelector('.authorMAD-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../web_comment.json"/>, document.querySelector('.authorWeb-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../c4e_comment.json"/>, document.querySelector('.authorC4E-medium'));


ReactDOM.render(<AuthorBoxCarouselVersion url="../MAD_comment.json"/>, document.querySelector('.authorMAD-small'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../web_comment.json"/>, document.querySelector('.authorWeb-small'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../c4e_comment.json"/>, document.querySelector('.authorC4E-small'));
