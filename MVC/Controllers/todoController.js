const todoDataDetails = require('../Models/todoModel');

const postTodo = async(req, res)=>{
    try {
        const {task} = req.body
        const postDetails = new todoDataDetails({
            task
        })
        await postDetails.save();
        res.status(200).json(postDetails)
    } catch (error) {
        res.status(501).json({message : "Server Error"});
        console.error("Error", error)
    }
}

const getTodos = async (req, res) =>{
    try {
        const allTodos = await todoDataDetails.find();
        if(!allTodos){
            res.status(401).json({message : "No todos"})
        }
        res.status(200).json(allTodos)
    } catch (error) {
        res.status(501).json({message : "Server Error"})
        console.error("Error", error)
    }
}

const editTodo = async(req, res) =>{
    try {
        const {task} = req.body;
        const edit = await todoDataDetails.findByIdAndUpdate(
            req.params.id, {task}
        );
        res.status(200).json(edit);  
    } catch (error) {
        res.status(501).json({message : "Server Error"})
        console.error(error);
    }
}

const deleteTodo = async(req, res) =>{
    try {
        const deleted = await todoDataDetails.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "Todo Deleted"})
    } catch (error) {
        res.status(501).json({message: "Server Error"})
        console.error(error)   
    }
}

module.exports = {postTodo, getTodos, editTodo, deleteTodo};