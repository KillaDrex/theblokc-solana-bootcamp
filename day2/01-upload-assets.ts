import {createMetaplexInstance} from './metaplex'
import {toMetaplexFile } from '@metaplex-foundation/js'
import fs from 'fs'

const buffer = fs.readFileSync(__dirname + "/assets/pic.jpeg")
const file = toMetaplexFile(buffer, "image.jpg")

const metaplex = createMetaplexInstance()

async function main() {
    const imageUrl = await metaplex.storage().upload(file)
    console.log('image Url', imageUrl) // https://arweave.net/vMyIN9I4e7bHNVeEI4fBtFcxapiNV9k2LwHfGBFkRBs
}

main()