import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDoctor, getAllDoctors } from "../../actions/Doctorsaction";
import notify from "../../../Hook/useNotifaction";

const DeleteDoctorHook = (doctor) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.DoctorsReducer.deleted);

  const handleDelete = async (e) => {
    e.persist();
    setLoading(true);
    await dispatch(deleteDoctor(doctor.id));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res?.status == 200) {
        setLoading(true);
        dispatch(getAllDoctors());
        return notify("Doctor deleted successfully", "success");
      } else return notify("Somithing went wrong", "error");
    }
  }, [loading]);

  return [handleDelete];
};

export default DeleteDoctorHook;
