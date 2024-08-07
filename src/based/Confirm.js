import { Button } from "../components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

export default function Confirm(props) {
  const [open, setOpen] = useState(false);

  const handleSave = (id) => {
    props.handleSave(id);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={props.colorBtn ? props.colorBtn : "variant"}
          onClick={() => setOpen(true)}
        >
          {props.nameShow}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.header}</DialogTitle>
          <DialogDescription>{props.content}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="submit"
            variant={props.colorBtn ? props.colorBtn : "variant"}
            onClick={() => {
              setOpen(false);
              props.handleSave(props.item);
            }}
          >
            {props.nameBtn}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
