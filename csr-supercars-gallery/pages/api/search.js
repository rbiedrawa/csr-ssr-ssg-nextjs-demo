import car from "../../cars.json";

export default (req, res) => {
    const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            car.filter(({ name }) => name.match(filter))
        )
    );
};