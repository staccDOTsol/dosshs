import { seq, struct, u8, u16 } from '@solana/buffer-layout';
import { PublicKey, Signer, SystemProgram, TransactionInstruction } from '@solana/web3.js';
import { programSupportsExtensions, TOKEN_2022_PROGRAM_ID } from '../constants';
import { TokenUnsupportedInstructionError } from '../errors';
import { addSigners } from './internal';
import { TokenInstruction } from '@solana/web3.js';
import { ExtensionType } from '../extensions';

/** TODO: docs */
export interface ReallocateInstructionData {
    instruction: TokenInstruction.Reallocate;
    extensionTypes: ExtensionType[];
}

/**
 * Construct a Reallocate instruction
 *
 * @param account        Address of the token account
 * @param payer          Address paying for the reallocation
 * @param extensionTypes Extensions to reallocate for
 * @param owner          Owner of the account
 * @param multiSigners   Signing accounts if `owner` is a multisig
 * @param programId      SPL Token program account
 *
 * @return Instruction to add to a transaction
 */
export function createReallocateInstruction(
    account: PublicKey,
    payer: PublicKey,
    extensionTypes: ExtensionType[],
    owner: PublicKey,
    multiSigners: Signer[] = [],
    programId = TOKEN_2022_PROGRAM_ID
): TransactionInstruction {
    if (!programSupportsExtensions(programId)) {
        throw new TokenUnsupportedInstructionError();
    }
    const baseKeys = [
        { pubkey: account, isSigner: false, isWritable: true },
        { pubkey: payer, isSigner: true, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ];
    const keys = addSigners(baseKeys, owner, multiSigners);

    const reallocateInstructionData = struct<ReallocateInstructionData>([
        u8('instruction'),
        seq(u16(), extensionTypes.length, 'extensionTypes'),
    ]);
    const data = Buffer.alloc(reallocateInstructionData.span);
    reallocateInstructionData.encode({ instruction: TokenInstruction.Reallocate, extensionTypes }, data);

    return new TransactionInstruction({ keys, programId, data });
}
