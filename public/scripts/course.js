var CourseBox = React.createClass({
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

})

var CourseList = React.createClass({
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
            <section>
                <div class="container articles_list">
                    <h3 class="section_title col-sm-5 col-xs-9">CÁC KHÓA HỌC</h3>
                    <article class="row">
                        <div class="col-sm-4">
                            <div class="news_thumbnail fade">
                                <a href="#"><img src="img/fullstack.png"/></a>
                            </div>
                        </div>
                        <div class="col-sm-8 fade">
                            <h3 class="column_title"><a href="#">Khóa học Lập trình Web Fullstack</a></h3>
                            <div>
                                <p>Học lập trình web Fullstack từ Front-end, Back-end web bằng công nghệ NodeJS mới nhất.</p>
                            </div><a href="#" class="see_more_link">Chi tiết <span aria-hidden="true" class="fa fa-chevron-right"></span></a>
                        </div>
                    </article>
                    <hr class="content_divider"/>
                </div>
            </section>
        );
    }
})

ReactDOM.render(<AuthorBox url=""/>, document.querySelector('.course'));
