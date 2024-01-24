import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { LuExpand } from "react-icons/lu";
function LockedResearchComp(props) {
  const { slides, options, data, setOpenModal, FullYLocked } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);
  const coverImageUrl = data[data.length - 1].imageUrl;

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="lg:h-full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Modal Title */}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-center items-center relative group h-full ">
                  <div className="embla !p-0 w-full">
                    <div className="embla__viewport " ref={emblaRef}>
                      <div className="embla__container ">
                        {data
                          .filter((_, i) => i !== data.length - 1)
                          .map((item, index) => {
                            return (
                              <div
                                className=" embla__slide  object-contain"
                                key={index}
                              >
                                <img
                                  src={item.imageUrl}
                                  alt="investment research"
                                  className="object-contain w-full h-full"
                                />
                              </div>
                            );
                          })}
                        <div className=" embla__slide relative ">
                          <div className="gap-4  flex flex-col items-center justify-center absolute z-10 top-0 bottom-0 left-0 right-0 w-full h-full">
                            <FaLock size={30} />
                            <p>Read full research here</p>
                            <p
                              // href="/aboutus"
                              onClick={() => setOpenModal(true)}
                              className={`btn  border-primary hover:bg-primary  bg-transparent hover:text-white`}
                            >
                              Subscribe Here
                            </p>
                          </div>
                          <div className="w-full h-full object-contain blur-sm ">
                            <img
                              src={coverImageUrl}
                              alt="Research"
                              className="object-contain w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-10 z-10  absolute bottom-0 flex flex-row justify-center items-center">
                    <button onClick={scrollPrev}>
                      <IoMdArrowDropleft
                        size={30}
                        className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
                      />
                    </button>
                    <button onClick={scrollNext}>
                      <IoMdArrowDropright
                        size={30}
                        className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
                      />
                    </button>
                  </div>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-row justify-center items-center relative group h-[15rem] lg:h-auto">
        <div className="embla !p-0 w-10/12 ">
          <div className="embla__viewport " ref={emblaRef}>
            <div className="embla__container ">
              {!FullYLocked &&
                data
                  .filter((_, i) => i !== data.length - 1)
                  .map((item, index) => {
                    return (
                      <div
                        className="w-[20rem] embla__slide h-[20rem] object-contain"
                        key={index}
                      >
                        <img
                          src={item.imageUrl}
                          alt="investment research"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    );
                  })}
              <div className="w-[20rem] embla__slide h-[20rem] relative ">
                <div className="gap-4  flex flex-col items-center justify-center px-2 absolute z-10 top-0 bottom-0 left-0 right-0 w-full h-full">
                  <FaLock size={30} />
                  <p className="hidden lg:block">Read full research here</p>
                  <p
                    // href="/aboutus"
                    onClick={() => setOpenModal(true)}
                    className={`btn ml-3  border-primary hover:bg-primary  bg-transparent hover:text-white btn-sm`}
                  >
                    Subscribe Here
                  </p>
                </div>
                <div className="w-full h-full object-contain blur-sm ">
                  <img
                    src={coverImageUrl}
                    alt="Research"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-10 z-10  absolute bottom-0 flex flex-row justify-center items-center">
          <button onClick={scrollPrev}>
            <IoMdArrowDropleft
              size={30}
              className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
            />
          </button>
          <button onClick={scrollNext}>
            <IoMdArrowDropright
              size={30}
              className="m-2 text-gray-600 active:scale-95 active:bg-gray-400 rounded-full transition-all duration-300"
            />
          </button>
        </div>
        {!FullYLocked && (
          <div className="hidden group-hover:flex group-hover:flex-row justify-center items-end absolute top-0  left-0 right-0 w-full h-1/2 ">
            <LuExpand
              onClick={onOpen}
              size={30}
              className="hover:scale-105 cursor-pointer h-10 w-10 p-1 bg-gray-300 rounded-full transition-all duration-300 backdrop-blur bg-opacity-30 active:scale-90"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(LockedResearchComp);
