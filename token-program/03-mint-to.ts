import * as Web3 from "@solana/web3.js";
import * as token from '@solana/spl-token'
import dotenv from "dotenv";
import base58 from "bs58";
dotenv.config();

async function main() {
  const connection = new Web3.Connection(Web3.clusterApiUrl("testnet"));
  const base58DecodedPK = base58.decode(process.env.SQL_PRIVATE_KEY || '')
  const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)  
  const mint = new Web3.PublicKey('8EPkQhd44p7VYdZVMVBZXgfmdFNyEsLSX6EZKJGc3ZaB')
  const tokenAccount = new Web3.PublicKey('GVDJ1KyEMkjjvMjraacWM97QELf6rMkc9PkStjDcXpJj')
  const owner = new Web3.PublicKey('NTcrU2rTaNAzbyirzgvpNbWLtBTKv12rtr2jhtBTPig')

  const tokenMint = await token.mintTo(connection,signer,mint,tokenAccount,owner,1) // 4SekpZjrfV5v1A2jR1zzjiGbJsJ5Sxu2ZLhiJYZMbHY7Qqtk2NfPhG4Vi7FNDKSY1fs2eZ4fLjAo1YrTPWRzkU8P

  console.log('tokenMint', tokenMint)
}

main();