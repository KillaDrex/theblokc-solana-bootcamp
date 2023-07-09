import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import { sendAndConfirmTransaction } from '@solana/web3.js'
import base58 from 'bs58'

async function main() {
    const base58DecodedPK = base58.decode(process.env.SQL_PRIVATE_KEY || '')
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    const transaction = new Web3.Transaction()
    const publicKey = new Web3.PublicKey('NTcrU2rTaNAzbyirzgvpNbWLtBTKv12rtr2jhtBTPig')
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: new Web3.PublicKey("736soFact9p7af99PKe3nKRGLW2gV6Q3qn3oivwKhHkm")
    })
    transaction.add(instruction)
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet') )
    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [signer]
    )

    console.log('SIGNATURE', signature)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err)
    })