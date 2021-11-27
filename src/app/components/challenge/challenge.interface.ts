export interface ChallengeStatusInterface {
    challengeOne: {
        login: string;
        password: string;
        completed: boolean;
    },
    challengeTwo: {
        date: string;
        completed: boolean;
    }
    challengeThree: {
        flag: string;
        completed: boolean;
    },
    challengeFour: {
        flag: string;
        completed: boolean;
    },
    challengeFive: {
        flag: string;
        completed: boolean;
    }
}

export interface SignInInfo{
    loggedIn: boolean;
    expires: Date;
}