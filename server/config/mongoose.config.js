const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/pets', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('DB connection established'))
    .catch(err => console.log('something went wrong:', err))