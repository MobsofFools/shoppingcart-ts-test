import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

export const Wrapper = styled.div`
    padding-top: 8vh;
    .flexbtn{
        height: 3.5rem;
    }
    .clear {
        float:right;
    }
`;
export const Center = styled.div`
    text-align: center;
`;
export const Input =styled(TextField)`
    padding-bottom: 2rem;
    height: 3.5rem;
    
`;
export const Flex = styled.div`
    align-items:stretch
`;