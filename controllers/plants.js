import { Plant } from '../models/plant.js'

function index(req, res) {
  Plant.find({})
  .then(plants => {
    res.render('plants/index', {
      plants,
      title: "🌮"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}