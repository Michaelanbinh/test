// Password here
const authens = [
    {
        id: '1',
        pw: '123456',
    },
    {
        id: '2',
        pw: '321000',
    },
    {
        id: '3',
        pw: '123456',
    },
    {
        id: '4',
        pw: '123456',
    },
    {
        id: '5',
        pw: '123456',
    },
    {
        id: '6',
        pw: '123456',
    },
    {
        id: '7',
        pw: '123456',
    },
    {
        id: '8',
        pw: '123456',
    }
];

const checkAuthen = function (id, pw) {
    let isMatched = false;
    for (authen of authens) {
        if (id === authen.id && pw === authen.pw) {
            isMatched = true;
        }
    }

    return isMatched;
}