import React, { useEffect } from "react";
import { Dialog, DialogTitle, Typography, Button } from "@material-ui/core";
import { AnyNaptrRecord } from "dns";
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

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Galerie</DialogTitle>
      <Carousel>
        {imgs.map((i: any, key: any) => {
          return (
            <Carousel.Item key={key}>
              <img className="d-block w-100 images" src={i.url} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Dialog>
  );
}

// export default function Galery() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value: string) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <ImageDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
