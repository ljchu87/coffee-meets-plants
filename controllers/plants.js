import { Plant } from '../models/plant.js'

function index(req, res) {
  Plant.find({})
  .then(plants => {
    res.render('plants/index', {
      plants,
      title: "Plants 🪴"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create (req,res){
  console.log(req.body);
  console.log(req.owner);
  req.body.owner = req.user.profile._id
  req.body.watered == !!req.body.watered
  Plant.create(req.body)
  .then(plant => {
    res.redirect('/plants')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/plants")
  })
}

export {
  index,
  create
}