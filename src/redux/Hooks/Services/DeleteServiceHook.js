import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteService, getAllServices } from "../../actions/ServicesAction";
import notify from "../../../Hook/useNotifaction";

const DeleteServiceHook = (service) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.ServicesReducer.deleted);

  const handleDelete = async (e) => {
    e.persist();
    setLoading(true);
    await dispatch(deleteService(service.id));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res?.status == 200) {
        setLoading(true);
        dispatch(getAllServices());
        return notify("Service deleted successfully", "success");
      } else return notify("Somithing went wrong", "error");
    }
  }, [loading]);

  return [handleDelete];
};

export default DeleteServiceHook;
