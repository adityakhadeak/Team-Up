import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import {

} from '@chakra-ui/react'
import React from 'react'

const Modal1 = ({ open ,setopenModal1, openModal1}) => {
    let { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Modal isOpen={open} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
dfgasdf
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={()=>{setopenModal1(!open)}}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modal1
