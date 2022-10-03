import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plantSchema = new Schema({
  name: String,
  scientificName: String,
  waterDate:Date,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Plant = mongoose.model('Plant', plantSchema)

export {
  Plant
}