import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js'

console.log(process.env.SQL_PRIVATE_KEY)

async function main() {
    const transaction = new Web3.Transaction()

    const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: new Web3.PublicKey('NTcrU2rTaNAzbyirzgvpNbWLtBTKv12rtr2jhtBTPig'),
        toPubkey: new Web3.PublicKey('BZCfJjQ124b2Lhw5ixuYpCVwrddCZWgXybYtophhvn4L'),
        lamports: 0.999995 * LAMPORTS_PER_SOL
    })
    transaction.add(sendSolInstruction)

    const base58DecodedPK = base58.decode(process.env.SQL_PRIVATE_KEY || '')
    const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

    const connection = new Web3.Connection(Web3.clusterApiUrl('testnet') )

    // send transaction
    const txHash = sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret])
    console.log('txHash', txHash)
}

main()