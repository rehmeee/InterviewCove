import mongoose from "mongoose"
const dbConnect = async ()=> {
    try {
        const connectionDetails = await mongoose.connect(`${process.env.DATABASE_URI}`)
        console.log(connectionDetails.connection.host);
    } catch (error) {
        console.log("error while connection to database", error)
        process.exit(1);
    }
}
export default dbConnect;