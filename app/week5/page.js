import ItemList from "./item-list";
import Item from "./item";

export default function page(){
    return(
        <main className="p-2">
            <h2 className="text-4x1 font-bold mb-4">Shopping list</h2>
            <ItemList/>
        </main>

    )
}