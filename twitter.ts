/*Exercício do LeetCode - Design Twitter
Exercício feito em grupo*/

class Tweet
{
    idUser: number;
    id: number;

    constructor(idUser: number, id: number)
    {
        this.idUser = idUser;
        this.id = id;
    }
}

class User
{
    id: number;
    seguindo: Array<User> = [];

    constructor(id: number)
    {
        this.id = id;
    }
}

class Twitter
{
    users: Array<User> = [];
    tweets: Array<Tweet> = [];

    constructor()
    {

    }

    userExists(userId: number): boolean
    {
        if(this.users.some(usuario => usuario.id === userId))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    createUser(id: number): void
    {
        let user: User = new User(id);
        this.users.push(user);
    }

    getUserIndex(id: number): number
    {
        let index: number = this.users.findIndex(usuario => usuario.id === id);
        return index;
    }

    getFolloweeIndex(posUser: number, id: number): number
    {
        let index: number = this.users[posUser].seguindo.findIndex(usuario => usuario.id === id);
        return index;
    }

    postTweet(userId: number, tweetId: number): void
    {
        if(!this.userExists(userId))
        {
            this.createUser(userId);
        }

        let tweet = new Tweet(userId, tweetId);
        this.tweets.unshift(tweet);
    }

    getNewsFeed(userId: number): number[]
    {
        if(!this.userExists(userId))
        {
            this.createUser(userId);
        }

		let posUsuario: number = this.getUserIndex(userId);

        let ids: Array<number> = [this.users[posUsuario].id];

        for(let seguindo of this.users[posUsuario].seguindo)
        {
            ids.push(seguindo.id);
        }

        let feed: Array<number> = [];

        for(let i: number = 0; i < this.tweets.length; i++)
        {
            if(ids.includes(this.tweets[i].idUser) && feed.length < 10)
            {
                feed.push(this.tweets[i].id);
            }
        }

        return feed;
    }

    follow(userId: number, idQueVaiSeguir: number): void
    {
        if(!this.userExists(userId))
        {
            this.createUser(userId);
        }

        if(!this.userExists(idQueVaiSeguir))
        {
            this.createUser(idQueVaiSeguir);
        }
        
        let posUsuario: number = this.getUserIndex(userId);
        let posSeguido: number = this.getUserIndex(idQueVaiSeguir);

        this.users[posUsuario].seguindo.push(this.users[posSeguido]);
    }

    unfollow(userId: number, followeeId: number): void 
    {
        let posUser: number = this.getUserIndex(userId);
        let posFollowee: number = this.getFolloweeIndex(posUser, followeeId);

        this.users[posUser].seguindo.splice(posFollowee, 1);
    }
}
