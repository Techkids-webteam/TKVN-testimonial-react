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
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
        return (
            <div>
                <ItemActive author={this.props.data[0].author}>{this.props.data[0].text}</ItemActive>
                <Item author={this.props.data[1].author}>{this.props.data[1].text}</Item>
                <Item author={this.props.data[2].author}>{this.props.data[2].text}</Item>
                <Item author={this.props.data[3].author}>{this.props.data[3].text}</Item>
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
    render: function(){
        return (
            <div className = "AuthorBoxCarouselVersion">
                <AuthorListCarouselVersion data={this.props.data}/>
            </div>
        );
    }
});

var AuthorListCarouselVersion = React.createClass({
    render: function(){
        return (
            <div id="myCarousel_MAD" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <ItemActive author={this.props.data[0].author}>{this.props.data[0].text}</ItemActive>
                    <Item author={this.props.data[1].author}>{this.props.data[1].text}</Item>
                    <Item author={this.props.data[2].author}>{this.props.data[2].text}</Item>
                    <Item author={this.props.data[3].author}>{this.props.data[3].text}</Item>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<AuthorBox url="api/comment" pollInterval={2000} />, document.querySelector('.authorMAD'));
ReactDOM.render(<AuthorBox data={dataWeb}/>, document.querySelector('.authorWeb'));
ReactDOM.render(<AuthorBox data={dataC4E}/>, document.querySelector('.authorC4E'));

ReactDOM.render(<AuthorBoxCarouselVersion data={dataMAD}/>, document.querySelector('.authorMAD-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion data={dataWeb}/>, document.querySelector('.authorWeb-medium'));
ReactDOM.render(<AuthorBoxCarouselVersion data={dataC4E}/>, document.querySelector('.authorC4E-medium'));


ReactDOM.render(<AuthorBoxCarouselVersion data={dataMAD}/>, document.querySelector('.authorMAD-small'));
ReactDOM.render(<AuthorBoxCarouselVersion data={dataWeb}/>, document.querySelector('.authorWeb-small'));
ReactDOM.render(<AuthorBoxCarouselVersion data={dataC4E}/>, document.querySelector('.authorC4E-small'));
