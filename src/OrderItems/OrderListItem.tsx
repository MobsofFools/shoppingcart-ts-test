import { OrderItemType} from './OrderItems';
import {Wrapper, Img} from './OrderListItem.styles'

type Props = {
    item: OrderItemType;
}
const OrderListItem: React.FC<Props> =({item}) => {
    return(
    <Wrapper>
        <Img src = {item.recipeImgSrc} alt={item.recipeName} />
        <p>{item.recipeName} x {item.quantity}</p>
    </Wrapper>
    );
}
export default OrderListItem;