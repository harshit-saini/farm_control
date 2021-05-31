const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log("MongoDB connected to => ", conn.connection.host);

  } catch (error) {
    console.log("can not connect to the database \n", error)
  }

}

module.exports = connectDB;