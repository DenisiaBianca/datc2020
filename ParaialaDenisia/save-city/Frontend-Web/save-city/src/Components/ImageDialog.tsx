import React, { useEffect } from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import "../Styles/Galery.css";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ImageDialog(props: any) {
  const { onClose, selectedValue, open, imgs } = props;

  useEffect(() => {
    console.log("Aici:" + imgs);
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Galerie</DialogTitle>
      <Carousel>
        {/* {imgs.map((i: any, key: any) => { */}
        {/* return ( */}
        <Carousel.Item>
          <img className="d-block w-100 images" src={imgs} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 images" src={imgs} alt="" />
        </Carousel.Item>
        {/* ); */}
        {/* })} */}
      </Carousel>
    </Dialog>
  );
}
