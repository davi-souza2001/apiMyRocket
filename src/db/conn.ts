import mongoose from 'mongoose'

async function main(){
    await mongoose.connect('mongodb+srv://MyRocket:MyRocketDev@myrocket.wlhec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    console.log('Conectouu ao Mongoose')
}

main().catch((err) => console.log(`Erro no mongo: ${err}`))

export default mongoose