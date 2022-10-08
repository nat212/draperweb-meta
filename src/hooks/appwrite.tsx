import { appwrite as client } from '@/lib/appwrite';
import { useState } from 'react';
import { Account, Models } from 'appwrite';

export type User = Models.Account<Models.Preferences>;

export function useAppwrite() {
    const [appwrite] = useState(client);

    return appwrite;
}

export function useAccount() {
    const appwrite = useAppwrite();
    const [account] = useState<Account>(new Account(appwrite));
    return account;
}

interface AccountState {
    error?: unknown;
    account?: User;
}

export async function useAccountState(): Promise<AccountState> {
    const account = useAccount();

    return account
        ?.get()
        .then(account => ({
            account,
        }))
        .catch(error => ({
            error,
        }));
}
