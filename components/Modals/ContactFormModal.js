import React, { useEffect } from "react";
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

  useEffect(() => {
    if (openModal) {
      onOpen();
    }
  }, [openModal, onOpen]);
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
                <form action="#" className="flex flex-col gap-2">
                  <Input
                    type="text"
                    label="Name"
                    placeholder="Enter Your name"
                  />
                  <Input
                    type="text"
                    label="Phone No"
                    placeholder="Enter Your Mobile"
                    pattern="[0-9]{10}"
                  />
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter Your email"
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className=""
                    // labelPlacement="outside"
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
                <Button color="primary" onPress={onClose}>
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
