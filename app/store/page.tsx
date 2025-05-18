import ItemCard from "./card";

export default function StorePage() {
    return (
        <div className="gap-4 grid-cols-4 grid-rows-4 flex">
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
        </div>
    )
}