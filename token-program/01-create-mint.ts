import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'

import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js'

async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet') )
    const acc = new Web3.PublicKey('NTcrU2rTaNAzbyirzgvpNbWLtBTKv12rtr2jhtBTPig')
    const base58DecodedPK = base58.decode(process.env.SQL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)   

    const tokenMint = await token.createMint(connection, signer, acc, acc, 9)

    console.log('tokenMint', tokenMint.toBase58() ) // 8EPkQhd44p7VYdZVMVBZXgfmdFNyEsLSX6EZKJGc3ZaB
}

main()