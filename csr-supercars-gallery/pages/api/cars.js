import cars from "../../cars.json";

export default (req, res) => {
    if (!req.query.id) {
        res.statusCode = 400;
        res.end("Must have id");
    } else {
        const supercar = cars.filter(
            ({ id }) => id === parseInt(req.query.id)
        );
        if (supercar.length === 0) {
            res.statusCode = 404;
            res.end(`Supercar ${req.query.id} not found!!!!`);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(supercar[0]));
        }
    }
};