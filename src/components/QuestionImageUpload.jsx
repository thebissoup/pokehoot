import React from "react";
import { useState } from "react";
import { Uploader, Button } from "rsuite";

export function QuestionImageUpload({
  disable,
  setDisable,
  loading,
  setLoading,
  handleFileUpload,
  handleFileDelete,
}) {
  return (
    <Uploader
      action="https://eo73o0pncyz34qm.m.pipedream.net" //sends post default post request to this method
      accept="image/*" // only image file types allowed
      //onUpload may help when needing to check the file size.
      disabled={disable}
      onError={(err) => {
        console.error(err);
      }}
      shouldQueueUpdate={(fileList) => {
        fileList.length >= 1 ? setDisable(true) : setDisable(false);
        setLoading(true);
        return new Promise((resolve) => {
          resolve(true);
        });
      }}
      shouldUpload={(file) => {
        return new Promise((resolve) => {
          resolve(true);
          setLoading(false);
        });
      }}
      onSuccess={(obj, file) => {
        handleFileUpload(obj, file);
      }}
      onRemove={(file) => {
        handleFileDelete();
        setDisable(false);
      }}
    >
      <Button loading={loading}>Upload Cover Image:</Button>
    </Uploader>
  );
}
