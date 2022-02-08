exports.home = (req, res) => {
    res.status(200).send("Home Content.");
};

exports.students = (req, res) => {
    res.status(200).send("students Content.");
};

exports.semesters = (req, res) => {
    res.status(200).send("semester Content.");
};

exports.class = (req, res) => {
    res.status(200).send("Class Content.");
};