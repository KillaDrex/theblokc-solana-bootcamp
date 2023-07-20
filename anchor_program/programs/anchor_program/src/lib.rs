use anchor_lang::prelude::*;

declare_id!("EVyUf1GBFMEdThER6pbEPbervBFj5Rc8bv67M2Lo1odK");

#[program]
mod send_string {
    use super::*;
    pub fn initialize(ctx: Context<InsertData>, data: String) -> Result<()> {
        ctx.accounts.new_account.data = data.to_string();
        msg!("String input:\'{}\'", data);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InsertData<'info> {

    #[account(init, payer = signer, space = 8 + 32)]
    pub new_account: Account<'info,  UserInput>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct UserInput {
    data: String,
}