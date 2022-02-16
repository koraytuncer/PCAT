const mongoose = require("mongoose")

const Schema = mongoose.Schema

//connetc DB
mongoose.connect("mongodb://localhost/pcat-test-db")

//create schemac
const PhotoSchema = new Schema({
  title: String,
  description: String,
})

const Photo = mongoose.model("Photo", PhotoSchema)

//create a photo
// Photo.create({
//   title: "Photo Title 2",
//   description: "Photo description 2 lorem ipsum",
// })

//read a Photo
// Photo.find({},(err,data)=>{
//   console.log(data)
// })

//update a photo
// const id = "620cc2186c99040d324ad485"
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Photo Updated",
//     description: "Fotoğraf Güncellendii",
//   },
//   {
//     new:true
//   },
//   (err, data) => {
//     console.log(data)
//   }
// )

//delete a photo
const id = "620cc2186c99040d324ad485"
Photo.findByIdAndDelete(id, (err, data) => {
  console.log("Fotoğraf Silindi!")
})
