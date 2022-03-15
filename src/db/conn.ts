import mongoose from 'mongoose'

async function main(){
    await mongoose.connect(process.env.MONGO_CONNECT)
    console.log('Conect to Mongoose')
}

main().catch((err) => console.log(`Erro in mongodb: ${err}`))

export default mongoose