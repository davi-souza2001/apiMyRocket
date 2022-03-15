import mongoose from 'mongoose'

async function main(){
    await mongoose.connect('mongodb+srv://MyRocket:MyRocketDev@myrocket.wlhec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('Conect to Mongoose')
}

main().catch((err) => console.log(`Erro no mongo: ${err}`))

export default mongoose