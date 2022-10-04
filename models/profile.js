import mongoose from 'mongoose'

const Schema = mongoose.Schema

  const coffeeSchema = new Schema ({
    coffeeType: {
      type: String,
      enum: ['Coffee', 'Cold Brew', 'Latte', 'Americano', 'Macchiato']
    },
    temperature: {
      type: String,
      enum: ['Hot', 'Iced']
    },
    milk: {
      type: String,
      enum: ['Whole', '2%', 'Almond', 'Oat', 'Soy']
    },
  })

const profileSchema = new Schema({
  name: String,
  avatar: String,
  coffees: [coffeeSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
