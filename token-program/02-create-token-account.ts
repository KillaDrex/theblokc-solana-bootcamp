import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet') )
    const base58DecodedPK = base58.decode(process.env.SQL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)  
    const mint = new Web3.PublicKey('8EPkQhd44p7VYdZVMVBZXgfmdFNyEsLSX6EZKJGc3ZaB')
    const owner = new Web3.PublicKey('NTcrU2rTaNAzbyirzgvpNbWLtBTKv12rtr2jhtBTPig')

    const tokenAccount = await token.createAccount(connection,signer,mint,owner)

    console.log('token account', tokenAccount.toBase58() ) // GVDJ1KyEMkjjvMjraacWM97QELf6rMkc9PkStjDcXpJj
}

main()