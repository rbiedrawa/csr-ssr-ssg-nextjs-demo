import axios from "axios";
import {Container, Row} from "react-bootstrap";

const fetchCar = async (id) => {
    const { data } = await axios.get(`http://localhost:3001/api/cars?id=${escape(id)}`);
    return data;
};

export async function getServerSideProps(context) {
    const data = await fetchCar(context.params.id);
    return {
        props: {
            data: data,
        }, // will be passed to the page component as props
    }
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