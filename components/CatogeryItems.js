
import List from "./List";
const CatogeryItems = (props) =>{

    const handleClick = () =>{
        props.func();
    }
    return(
         <div className="w-6/12 bg-gray-100 mx-auto my-2 rounded-xl px-2 py-2 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-extrabold text-xl">{props?.items?.title}({props?.items?.itemCards.length})</span>
                    <span>🢃</span>
                </div>
                <div className="p-4">
                    
                    {props.showMenu && props?.items?.itemCards.map((item,i)=>(
                        <List key={i} item = {item}/>
                    ))}
                </div>
            </div> 
    )
}

export default CatogeryItems;