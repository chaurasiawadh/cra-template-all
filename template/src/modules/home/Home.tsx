import { useDispatch, useSelector } from 'react-redux';
import { fetchGetApiCallExample, fetchPostApiCallExample } from '../../store/actions/exampleAction';
import { getPercentage, formatPriceINR } from 'js-util-methods';

const HomeComponent = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    console.log('store', store);

    const getAPICall = () => {
        dispatch(fetchGetApiCallExample());
    };
    const postAPICall = () => {
        const requestJSON = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        dispatch(fetchPostApiCallExample(requestJSON));
    }

    return (
        <div>
            <h1><a href="https://www.npmjs.com/package/js-util-methods">Using JS-Utility </a> </h1>
            <h6>getPercentage(2000, 200): {getPercentage(2000, 200)}% </h6>
            <h6>formatPriceINR(2076200): {formatPriceINR(2076200)} </h6>
            <h1>This is Home Component</h1>
            <button onClick={getAPICall} style={{ marginRight: 10 }}>GET API CALL</button>
            <button onClick={postAPICall}>POST API CALL</button>
        </div>
    )
}

export default HomeComponent;
