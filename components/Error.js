import { useRouteError } from "react-router-dom";
const Error = ()=>{

    const error = useRouteError()
    console.log(error)
    return(
        <>
            <h1>This is Error Us page</h1>
            <p>OOPS Something went wrong !.......</p>
            <p>{error.status} : {error.statusText}</p>
        </>
    )
}

export default Error;