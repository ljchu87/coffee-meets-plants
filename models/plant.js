import mongoose from 'mongoose'

const Schema = mongoose.Schema

const plantSchema = new Schema({
  name: String,
  waterDate: {
    type: String,
    default: function() {
      return new Date.toDateString()
    }
  },
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Plant = mongoose.model('Plant', plantSchema)

export {
  Plant
}