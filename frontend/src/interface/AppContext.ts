import {Person} from "./person"
import { ProductCart } from "./ProductCart"

export default interface AppContext {
    cart:ProductCart[]
    changeCart: (cartArr: ProductCart[]) => void
    jwtToken: string | null
    changeJwtToken: (jwtToken: string) => void
    isAdmin: boolean,
    changesetIsAdmin:(value: boolean) => void
}
