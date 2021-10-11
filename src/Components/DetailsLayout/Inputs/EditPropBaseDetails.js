import React, { useState, Fragment} from 'react'
import { Backdrop, Modal } from '@material-ui/core';

export default function EditPropBaseDetails() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Modal 
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 1000,
            }}
            
            >

        </Modal>
    )
}


        
        