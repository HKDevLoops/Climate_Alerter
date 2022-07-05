import axios from "axios";
import {useEffect,useState} from "react";

export function AQI(){
    const [result, setresult] = useState(null);
    const aqi = async () => {
        try {
            let res = await axios.get("http://localhost:8000/aqi");
            let result = res.data;
            setresult(result);
        }catch (e){
            console.log(e);
        }
    };
    useEffect(() => {
       aqi().then(r => console.log(r))
    }, []);
    return(
        console.log(result)
    )
    // const [todos, setTodos] = useState(null)
    // const fetchTodos = async () => {
    //     const response = await fetch("http://localhost:8000/aqi");
    //     const todos = await response.text();
    //     setTodos(todos.data)
    // }
    // console.log(todos);
    // console.log(setTodos);
    
    // useEffect(() => {
    //    fetchTodos().then(r => console.log(r))
    // }, []);
}

export default AQI;

// Good
// rgb(19,201,28)

// Fair
// 15,134,25

// Moderate
// 201,204,13

// poor
// 204,83,13
// very poor
// 204,13,13