import { DioAccount } from "./dioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Voce pegou um empréstimo')
    }
    deposit = (): void => {
        console.log('A empresa depositou') 
    }
}