import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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


const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}


export default DishDetail;

