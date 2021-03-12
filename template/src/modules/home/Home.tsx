import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetApiCallExample,
  fetchPostApiCallExample,
} from "../../store/actions/exampleAction";
import FetchSendRequest from "../../shared/services/fetchSendRequestService";
import { GET_JSON_PLACEHOLDER_URL } from "../../shared/constants/urls";
import { setFormatDateOrTime } from "../../utils/dateTimeUtils";

const requestJSON = {
  title: "foo",
  body: "bar",
  userId: 1,
};

const HomeComponent = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log("store", store);

  const getSagaAPICall = () => {
    dispatch(fetchGetApiCallExample());
  };

  const postSagaAPICall = () => {
    dispatch(fetchPostApiCallExample(requestJSON));
  };

  const getNormalAPICall = async () => {
    const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
    });
    console.log("getNormalAPICall", data);
  };

  const postNormalAPICall = async () => {
    const data = await FetchSendRequest.instance.MakeAPICall({
      url: GET_JSON_PLACEHOLDER_URL,
      body: requestJSON,
    });
    console.log("postNormalAPICall", data);
  };

  return (
    <div>
      <h1>This is Home Component</h1>
      <button onClick={getNormalAPICall}>
        GET NORMAL API CALL
      </button> <br /> <br />
      <button onClick={postNormalAPICall}>
        POST NORMAL API CALL
      </button> <br /> <br />
      <button onClick={getSagaAPICall} style={{ marginRight: 10 }}>
        GET SAGA API CALL
      </button>{" "}
      <br /> <br />
      <button onClick={postSagaAPICall}>POST SAGA API CALL</button>
      <h1>Date {setFormatDateOrTime("2021-01-17")}</h1>
    </div>
  );
};

export default HomeComponent;
