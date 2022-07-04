import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Message(){
    const [result, setresult] = useState(null);
    const message = async () => {
        try {
            let res = await axios.post("http://localhost:8000/register");
            let result = res.data;
            setresult(result);
        }catch (e){
            console.log(e);
        }
    };
    useEffect(() => {
       message()
    }, []);
    return(
        <div>
            {result}
        </div>
    )
}