import { setFormatDateOrTime } from "src/utils/dateTimeUtils";
import { COMMON_UTILS_LIST, DATE_FORMAT_LIST } from "src/shared/constants/common";

const currentDate: Date = new Date();
const UtilityExample = () => {
    return (
        <div style={{ marginLeft: 16 }}>
        <h4 className="fix-header">Common Utilities</h4>
      
        <table>
                <thead>
                   <tr>
                   <th>Function</th>
                    <th>Return</th>
                    <th>Description</th>
                   </tr>
                </thead>
                <tbody>
                    {COMMON_UTILS_LIST.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.output}</td>
                            <td>{item.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4 className="fix-header">Date Utilities</h4>
            <p>Date: {setFormatDateOrTime(currentDate.toDateString())}</p>

           <h5>List of all available formats</h5>  

            <table>
                <thead>
                   <tr>
                   <th>Format</th>
                    <th>Output</th>
                    <th>Description</th>
                   </tr>
                </thead>
                <tbody>
                    {DATE_FORMAT_LIST.map((item, index) => (
                        <tr key={index}>
                            <td>{item.format}</td>
                            <td>{item.output}</td>
                            <td>{item.des}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default UtilityExample;

