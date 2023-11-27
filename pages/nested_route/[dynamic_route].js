import {useRouter } from 'next/router'
const Post = () => {
    const router = useRouter()
    const { dynamic_route } = router.query
    return <h1> Post : {dynamic_route}</h1>
}
export default Post

//without this file we will get a 404 page 
// since we set a dynamic route, now any path entered will redirect us to this page
