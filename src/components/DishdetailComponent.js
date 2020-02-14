import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {
        if (comments !== undefined) {
            const listcomments = comments.map((commentinfo) => {
                const formatted = new Date(commentinfo.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                });
                return (
                    <li key={commentinfo.id}>
                        <p>{commentinfo.comment}</p>
                        <p>-- {commentinfo.author}, {formatted}</p>
                    </li>
                );
            });
            return (
                <div>
                    <ul className="list-unstyled">
                        {listcomments}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const dish = this.props.dish;
        if (dish != null)
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

}
export default DishDetail;

