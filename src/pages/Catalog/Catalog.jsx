import { Filters } from "../../components/Filters/Filters"
import { CarList } from "../../components/CarList/CarList"

export const Catalog = () => {
    return(
        <section>
            <div>
                <Filters/>
            </div>
            <div>
                <CarList/>
            </div>
        </section>
    )
}