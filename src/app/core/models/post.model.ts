export interface Post {
    _id: string
    title: string,
    desc: string,
    timestamp: string,
    author: {
        fullname: string
    },
    content: string,
    thumbnail: string
}