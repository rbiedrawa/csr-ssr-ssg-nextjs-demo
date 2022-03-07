import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

const fetchCar = async ({queryKey}) => {
    const [_, id] = queryKey
    const { data } = await axios.get(`/api/cars?id=${escape(id)}`);
    return data;
};

const Car = () => {
    const router = useRouter();
    const {data} = useQuery(["cars.byName", router.query.id], fetchCar);

    return (
        <div>
            <Container>
                {data && (
                    <>
                        <Row>
                            <img
                                src={`/cars/${data.id}.jpg`}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Row>
                        <Row>
                            <h1 className="text-center">{(data && data.name) || "SuperCar"}</h1>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Car;