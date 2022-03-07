import {Container, Row} from "react-bootstrap";
import cars from "../../cars.json";

export async function getStaticPaths() {
    return {
        paths: cars.map(car => ({
            params: {
                id: car.id.toString(),
            },
        })),
        fallback: false
    };
}

export async function getStaticProps(context) {
    return {
        props: {
            data: cars.filter(
                ({ id }) => id === parseInt(context.params.id)
            )[0],
        },
    };
}

const Car = ({data}) => {
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