
module.exports = {
     allHouses: (req, res, next) => {
        const db = req.app.get("db");
        db.all_houses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({error: "Cannot retrieve houses"});
            console.log(err);
        });
    },

    addHouse: (req, res, next) => {
        const db = req.app.get("db");
        const {property_name, address, city, state, zip} = req.body;
        db.add_house([property_name, address, city, state, zip])
        .then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({error: "cannot add house"});
            console.log(err);
        });
    },

    deleteHouse: (req, res, next) => {
        const db = req.app.get('db');
        const{id} = req.params;
        db.delete_house(id)
        .then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send({error: "cannot delete house"});
        })
    }
}