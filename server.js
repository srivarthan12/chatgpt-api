const { OpenAI } = require("openai")
const openai = new OpenAI({
    apiKey: 'sk-XPXcXhtGHo7WQn6mhMfk-GM89mh9md6H_R8r7z7YT7T3BlbkFJPddqpObaaF67KGD-ALEApzuOIdp5-MLiyf0UumERIA'
})
const express =  require('express')
const app = express()

app.use(express.static('public'))

app.listen(5000, ()=> {
    console.log("Server is active")
})

app.post('/chat', async (req, res)=> {   
    try {
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: req.body.question}
          ]  
      })           
  
      res.status(200).json({message: resp.choices[0].message.content})
    } catch(e) {
        res.status(400).json({message: e.message})
    }
  })