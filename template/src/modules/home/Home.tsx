import { useDispatch, useSelector } from 'react-redux';
import { fetchGetApiCallExample, fetchPostApiCallExample } from '../../store/actions/exampleAction';

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
            <h1>This is Home Component</h1>
            <button onClick={getAPICall} style={{ marginRight: 10 }}>GET API CALL</button>
            <button onClick={postAPICall}>POST API CALL</button>
        </div>
    )
}

export default HomeComponent;
