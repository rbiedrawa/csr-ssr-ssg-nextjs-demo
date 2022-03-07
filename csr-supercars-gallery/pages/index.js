import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, FormControl, Row, Col, Card } from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import Link from "next/link";


const fetchCar = async ({queryKey}) => {
    const [_, query] = queryKey
    const {data} = await axios.get(`/api/search?q=${escape(query)}`)
    const map = data.map((car) => ({
        ...car,
        image: `/cars/${car.id}.jpg`
    }));
    return map;
}



const Home = () => {
    const [query, setQuery] = useState("");
    const { data } = useQuery(['cars', query], fetchCar);

    return (
        <Container>
            <FormControl
                placeholder="Search for a supercar..."
                aria-label="Search"
                value={query}
                onChange={(event => setQuery(event.target.value))}
            />
            <br/>
            {data && (
                <Row>
                    {data.map(({ id, name, tags , image}) => (
                        <Col xs={4} key={id} style={{ padding: 5 }}>
                            <Link href={`/cars/${id}`}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={image}
                                        style={{ maxHeight: 300 }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Subtitle>{tags.join(", ")}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )
}

export default Home;