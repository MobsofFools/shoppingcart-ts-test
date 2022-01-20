import { useQuery } from 'react-query';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import OrderListItem from './OrderListItem';
import { Container } from '@material-ui/core';

export type OrderItemType = {
    recipeId: number;
    recipeName: string;
    quantity: number;
    recipeImgSrc: string;
}

type Props = {
    orderId: string;
}
const OrderedItems: React.FC<Props> = ({ orderId }) => {
    if(!orderId)
    {
        orderId = "0";
    }
    const idString = orderId.toString();
    const fetchCurrentOrderItems = async (): Promise<OrderItemType[]> =>
        await (
            await fetch('https://localhost:44379/P/GetOrderItems/' + idString, {
                method: 'GET'
            })
        ).json();
    const { data, isLoading, error } = useQuery<OrderItemType[]>(
        'items',
        fetchCurrentOrderItems
    );
    if(isLoading) return <CircularProgress/>
    if(error) return <div>Something went wrong...</div>

    return (
        <Container>
            <br/>
            <Grid container spacing={1}>
                {data?.map(item => (
                    <Grid item key={item.recipeId} xs={12}>
                        <OrderListItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

}
export default OrderedItems;

