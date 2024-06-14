import React from "react";
import "./StyleCheckBox.modules.css";
import {  FormikValues } from "formik";
function CheckBox({
  formik,
}: {
  formik: FormikValues
}) {
  return (
    <div className="checkbox-wrapper-10">
      <input
        type="checkbox"
        className="tgl tgl-flip"
        id="State"
        name="State"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.State}
      />
      <label
        htmlFor="State"
        data-tg-on="Completed!"
        data-tg-off="UnCompleted!"
        className="tgl-btn"
      ></label>
    </div>
  );
}

export default CheckBox;
