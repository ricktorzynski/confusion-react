import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    renderComments(comments) {
        if (comments !== undefined) {
            const listcomments = comments.map((commentinfo) => {
                return (
                    <ul className="list-unstyled">
                        <li>{commentinfo.comment}</li>
                        <li>-- {commentinfo.author}</li>
                    </ul>
                );
            });
            return (
                <div>
                    {listcomments}
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(dish.comments)}
                        </ul>
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

