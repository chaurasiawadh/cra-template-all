import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetApiCallExample,
  fetchPostApiCallExample,
} from "src/store/actions/exampleAction";
import { GET_JSON_PLACEHOLDER_URL } from "src/shared/constants/urls";
import FetchSendRequest from "src/shared/services/fetchSendRequestService";

const requestJSON = {
  title: "foo",
  body: "bar",
  userId: 1,
};

const CheckApiCall = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log("store", store);

  const [isSuccess, setIsSuccess] = useState(false);

  const getSagaAPICall = () => {
    setIsSuccess(false);
    dispatch(fetchGetApiCallExample());
  };

  const postSagaAPICall = () => {
    setIsSuccess(false);
    dispatch(fetchPostApiCallExample(requestJSON));
  };

  const getNormalAPICall = async () => {
    setIsSuccess(false);
    const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
    });
    console.log("getNormalAPICall", data);
    if (data) {
      setIsSuccess(true);
    }
  };

  const postNormalAPICall = async () => {
    setIsSuccess(false);
    const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
      body: requestJSON,
    });
    console.log("postNormalAPICall", data);
    if (data) {
      setIsSuccess(true);
    }
  };
  return (
    <div style={{ paddingLeft: 16 }}>
      <h4 className="fix-header">Normal API call</h4>
      {isSuccess && <p>Normal API call success. go to Network</p>}
      <div className="api-box">
        <button onClick={getNormalAPICall}>GET NORMAL API CALL</button>
        <pre>
          <code>
            {`  const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
    });`}
          </code>
        </pre>
      </div>
      <br /> <br />
      <div className="api-box">
        <button onClick={postNormalAPICall}>POST NORMAL API CALL</button>
        <pre>
          <code>
            {`  const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
      body: requestJSON,
    });`}
          </code>
        </pre>
      </div>
      <br /> <br />
      <h4 className="fix-header">Saga API call</h4>
      <div className="api-box">
        <button onClick={getSagaAPICall} style={{ marginRight: 10 }}>
          GET SAGA API CALL
        </button>
        <pre>
          <code>{` dispatch(fetchGetApiCallExample()); `}</code>
        </pre>
      </div>
      <br /> <br />
      <div className="api-box">
        <button onClick={postSagaAPICall}>POST SAGA API CALL</button>
        <pre>
          <code>{` dispatch(fetchPostApiCallExample(requestJSON)); `}</code>
        </pre>
      </div>
    </div>
  );
};

export default CheckApiCall;
