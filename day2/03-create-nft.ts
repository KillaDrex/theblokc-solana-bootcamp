import {createMetaplexInstance} from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/1FS3fHLUu7GbFdllt2HHG2kRC3qQhOB8QkPFTBAI-jY'
    const {nft} = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0,
    })

    console.log('nft', nft)
}

main()