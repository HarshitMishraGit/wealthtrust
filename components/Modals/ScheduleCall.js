import React, { useEffect, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function ScheduleCall({ openModal, setOpenModal }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const Submitref = useRef(null);
  useEffect(() => {
    if (openModal) {
      onOpen();
    }
  }, [openModal, onOpen]);
  const submitForm = () => {
    Submitref.current.click();
  };
  const Options = [
    {
      value: "Tomorrow - 8 AM - 12 PM",
      label: "Tomorrow - 8 AM - 12 PM",
    },
    {
      value: "Tomorrow - 12 PM - 4 PM",
      label: "Tomorrow - 12 PM - 4 PM",
    },
    {
      value: "Tomorrow - 4 PM - 8 PM",
      label: "Tomorrow - 4 PM - 8 PM",
    },
  ];
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={(e) => {
          onOpenChange();
          setOpenModal(e);
        }}
        isDismissable={false}
      >
        <ModalContent className="max-w-lg rounded-none bg-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                <h3 className="text-2xl font-bold p-3">
                  Schedule A Call With Our Experts
                </h3>
                {/* <p className="text-sm font-light">
                  We will get back to you as soon as possible
                </p> */}
              </ModalHeader>
              <ModalBody>
                <form action="#" className="flex flex-col gap-2">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Enter Your name"
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Phone No"
                    placeholder="Enter Your Mobile"
                    pattern="[0-9]{10}"
                    isRequired
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter Your email"
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Location"
                    placeholder="Enter Your city name"
                    isRequired
                  />
                  <Select
                    label="When Can We Reach You ?"
                    placeholder="When Can We Reach You ?"
                    className=""
                    isRequired
                  >
                    {Options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input type="submit" ref={Submitref} className="hidden" />
                </form>
                <div>
                  <p className="text-xs text-gray-400">
                    or Call Us On
                    <a href="tel:+919819039345" className="text-blue-500 px-2">
                      +91 9819039345
                    </a>
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button
                  color="danger"
                  variant="light"
                  className="border border-red-500"
                  onPress={onClose}
                >
                  Close
                </Button> */}
                <Button color="primary" onPress={submitForm}>
                  Schedule
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
