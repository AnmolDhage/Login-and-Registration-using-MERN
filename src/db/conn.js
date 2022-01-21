const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Registration", {
  useNewUrlParser: true
}).then(() => {
  console.log(`connection successful on port 27017`);
}).catch((e) => {
  console.log(e);
})