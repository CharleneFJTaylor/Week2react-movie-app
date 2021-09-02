import React from 'react';
import Comment from './comments';
import AddButton from './add-button';
import RatingStars from './Rating-star';



export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            count: 0
        };
    }
    render(){
        let comments;
        if (this.state.comments) {
            comments = this.state.comments.map((comment, index) => <Comment key={index} {...comment} />)
        }
        return(
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Movie 1
                </div>
                <div className="card-body">
                    {this.state.content}
                    <img src="https://prod.miramax.digital/media/assets/Pulp-Fiction1.png" alt="Pulp Fiction" />
                </div>
                <div className="card-footer">
                    <AddButton />
                    {comments}
                    Tell us how you liked it ! <RatingStars />
                </div>
                <div className="card-header bg-primary text-white">
                    Movie 2
                </div>
                <div className="card-body">
                In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.
                    <br></br><img src="https://i.pinimg.com/originals/6d/20/d1/6d20d140a8c63c4a46dc228b125237b0.jpg" alt="It" />
                </div>
                <div className="card-footer">
                    <AddButton />
                    Tell us how you liked it ! <RatingStars />
                </div>
            </div>
        );
    }     
}