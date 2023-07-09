import {createMetaplexInstance} from './metaplex'

const metaplex = createMetaplexInstance()

const metadata = {
    name:  "Water Basag",
    description: "My first Solana NFT using Metaplex Token Standard",
    image: 'https://arweave.net/vMyIN9I4e7bHNVeEI4fBtFcxapiNV9k2LwHfGBFkRBs',
    attributes: [
        {
            trait_type: 'Event',
            value: 'Solana Developers Bootcamp'
        }
    ]
}

async function main() {
    const {uri} = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri) // https://arweave.net/1FS3fHLUu7GbFdllt2HHG2kRC3qQhOB8QkPFTBAI-jY
}

main()