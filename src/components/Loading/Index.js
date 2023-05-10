import Loading from '../../img/loading.svg';
import {DivLoading} from './styles';

function LoadingIndex(){
    return(
        <DivLoading>
            <img className='loader' src={Loading} alt="Loading" />
        </DivLoading>
    )
}

export default LoadingIndex