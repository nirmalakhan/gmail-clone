import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { serverTimestamp } from "@firebase/firestore";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    setDoc(doc(collection(db, "emails")), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
      
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">To is Required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required</p>
        )}
        <input
          name="message"
          className="sendMail_message"
          placeholder="Message.."
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required</p>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
