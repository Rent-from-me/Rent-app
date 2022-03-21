import { convertLength } from "@mui/material/styles/cssUtils";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ownerItemFetch } from "../../../store/Actions/ownerAction/OwnerAction";
import HostItem from "./HostItem";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const HostLIst = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.OwnerReducer.ownerItemsCreate);
  
  const checkFechItem = useSelector(
    (state) => state.OwnerReducer.fechtcreateitem
  );

  const store = JSON.parse(localStorage.getItem("owner"));

  useEffect(() => {
    dispatch(ownerItemFetch());
  });

  const ownerItemsCreate = items.filter(
    (item) =>
       item.owner_id === store.ownerId
  );

  console.log("filter", ownerItemsCreate);

  return (
    <div>
      {ownerItemsCreate.length > 0 ? (
        ownerItemsCreate.map((item) => <HostItem {...item} key={item.id} />)
      ) : (
        <div class="no-comment mt-5">
          <div>
            <WarningAmberIcon className="icon-warn me-2 fs-2" />
            wali wax alaaba ah maad mada soo galin
          </div>
          <NavLink to="/New" className="link">
            <Button className="btn__now fs-4 mt-2 " variant="contained">
              Create Now
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HostLIst;
