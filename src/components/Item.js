import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle, 
  Button
} from "reactstrap";

const Item = ({ data }) => (

	<Card>
		<CardImg top width="100%" src={data.image} alt={data.character} />
		
		<CardBody>
			<CardTitle>{data.character}</CardTitle>
			<CardText>{data.quote}</CardText>
			<Link to={`/detail/${data.id}`}>
				<Button>
					Mas informacion
				</Button>
			</Link>
		</CardBody>

	</Card>
);

Item.propTypes = {
  data: PropTypes.object.isRequired
};

export default Item;
