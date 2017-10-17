const router = require("express").Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json()); // support json encoded bodies

const taskCtrl = require("../controllers/taskCtrl");

router.get("/", taskCtrl.getTasks);

router.put("/:id", taskCtrl.putTask);

router.post("/", taskCtrl.postTask);

module.exports = router;
