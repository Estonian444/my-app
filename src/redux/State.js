let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', like: 10 },
            { id: 2, message: 'Its my first post', like: 18 },
        ],

    },
    dialogPage: {
        messages: [
            { id: 1, message: 'HI' },
            { id: 2, message: 'HYoyooyoyI' },
            { id: 3, message: 'xaxaxa' },
            { id: 4, message: 'hello' },
        ],
        dialogs: [
            { id: 1, name: 'Kostiy' },
            { id: 2, name: 'Sergey' },
            { id: 3, name: 'Mary' },
            { id: 4, name: 'Nasty' },
            { id: 5, name: 'Dima' },
        ],
    }

}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state