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
} from "@nextui-org/react";

export default function ContactFormModal({ openModal, setOpenModal }) {
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
        <ModalContent className="max-w-[70rem] rounded-none bg-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                <h3 className="text-2xl font-bold">
                  Get more from your financial budget .
                </h3>
                <p className="text-sm font-light">
                  We will get back to you as soon as possible
                </p>
              </ModalHeader>
              <ModalBody>
                <form
                  method="POST"
                  action="/ContactUs"
                  className="flex flex-col gap-2"
                >
                  <Input
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter Your name"
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Phone No"
                    name="phone"
                    placeholder="Enter Your Mobile"
                    pattern="[0-9]{10}"
                    isRequired
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter Your email"
                    isRequired
                  />
                  <Input
                    type="text"
                    label="Location"
                    name="location"
                    placeholder="Enter Your city name"
                    isRequired
                  />
                  <Textarea
                    label="Description"
                    name="description"
                    placeholder="Enter your description"
                    className=""
                    isRequired
                    // labelPlacement="outside"
                  />
                  <Input
                    type="submit"
                    ref={Submitref}
                    className="hidden"
                    name="contactForm"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  className="border border-red-500"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button color="primary" onPress={submitForm}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
