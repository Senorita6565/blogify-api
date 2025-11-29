const express = require('express');
const app = express();
const postsRouter = require('./routes/posts.routes');
app.get("/",(req,res)=>{
    return res.status(200).send("This is the backend")
})

app.use(express.json());

// Mount the posts router
app.use('/api/v1/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
