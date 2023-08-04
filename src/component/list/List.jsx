import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import timestamps from "../../assets/timeStamps.json";
import { useEffect, useState } from "react";

const List = ({ rows,currency,onpasscardDetails }) => {
  const [first, setfirst] = useState(rows)

  const showDate =(row,type)=>{
    var results = timestamps.results.filter((item) => item?.["&id"] === row["&id"]);

  
return type===1? results[0].timestamps?.orderSubmitted:results[0].timestamps
  }

  const pushElement =(id,item)=>{
    var results = rows.filter((item,index) => index !== id);
    setfirst([item].concat(results))
  }

  useEffect(() => {
    setfirst(rows)
  }, [rows])
  
  return (
    <table className={styles.container} >
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody >
        {first.map((row,index)  => (
          <ListRow onClick={()=>onpasscardDetails(row?.executionDetails,showDate(row))} key={index} >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{showDate(row,1)}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
