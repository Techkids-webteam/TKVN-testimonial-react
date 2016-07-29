var dataMAD = [
  {id: 1, author: "Trần Trung x", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 1", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 1", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 1", text: "Android Student tại Techkids Android developer tại FPT software"},
];
var dataWeb = [
  {id: 1, author: "Trần Trung x", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 2", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 2", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 2", text: "Android Student tại Techkids Android developer tại FPT software"},
];
var dataC4E = [
  {id: 1, author: "Trần Trung x", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 3", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 3", text: "Android Student tại Techkids Android developer tại FPT software"},
  {id: 1, author: "Trần Trung 3", text: "Android Student tại Techkids Android developer tại FPT software"},
];

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
                return <ItemActive key={comment.id} author={comment.author}>{comment.text}</ItemActive>
            }
            else{
                return <Item key={comment.id} author={comment.author}>{comment.text}</Item>
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
        <div className="item active">
            <img src="img/ProfilePicture_1.png"/>
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
            <div className="item">
                <img src="img/ProfilePicture_1.png"/>
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
                return <ItemActive key={comment.id} author={comment.author}>{comment.text}</ItemActive>
            }
            else{
                return <Item key={comment.id} author={comment.author}>{comment.text}</Item>
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

var AuthorList = React.createClass({
    render: function(){
        var comments = this.props.data.map(function(comment, index){
            if(index == 0){
                return <ItemActive key={comment.id} author={comment.author}>{comment.text}</ItemActive>
            }
            else{
                return <Item key={comment.id} author={comment.author}>{comment.text}</Item>
            }
        });
        return (
            <div>
                {comments}
            </div>
        );
    }
});

ReactDOM.render(<AuthorBox url="../comment.json"/>, document.querySelector('.authorMAD'));
ReactDOM.render(<AuthorBox url="../comment.json"/>, document.querySelector('.authorWeb'));
ReactDOM.render(<AuthorBox url="../comment.json"/>, document.querySelector('.authorC4E'));

ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorMAD-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorWeb-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorC4E-medium'));


ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorMAD-small'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorWeb-small'));
ReactDOM.render(<AuthorBoxCarouselVersion url="../comment.json"/>, document.querySelector('.authorC4E-small'));
