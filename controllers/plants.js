import { Plant } from '../models/plant.js'

function index(req, res) {
  Plant.find({})
  .then(plants => {
    res.render('plants/index', {
      plants,
      title: 'Coffee Meets Plants 🪴'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create (req,res){
  req.body.owner = req.user.profile._id
  Plant.create(req.body)
  .then(plant => {
    res.redirect('/plants')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/plants')
  })
}

function show(req, res) {
  Plant.findById(req.params.id)
  .populate("owner")
  .then(plant => {
    res.render('plants/show', {
      plant,
      title: "🪴 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/plants')
  })
}

function edit(req, res) {
  Plant.findById(req.params.id)
  .then(plant => {
    res.render('plants/edit', {
      plant,
      title: "Edit Plant 🪴"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/plants')
  })
}

export {
  index,
  create,
  show,
  edit
}