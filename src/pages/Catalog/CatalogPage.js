import { AdvertsList } from "../../components/AdvertsList/AdvertsList";
import { PaginationButton } from "../../components/PaginationButton/PaginationButton";

export default function CatalogPage() {
    return (
            <div>
                <AdvertsList/>
                <PaginationButton/>
            </div>
        )
}