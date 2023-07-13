import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog } from '@headlessui/react'
import { TbX } from 'react-icons/tb'
// import { ReactComponent as CloseIcon } from '@assets/close_icon.svg'

type Props = {
    title?: string
    isOpen: boolean
    onClose: () => void
    customClasses?: string
}
function Modal({
    title,
    isOpen,
    children,
    onClose,
    customClasses = 'md:w-1/2 sm-w-4/5'
}: React.PropsWithChildren<Props>) {
    return (
        <AnimatePresence>
            <Dialog
                open={isOpen}
                onClose={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-y-auto no-scollbar"
            >
                <div
                    className="fixed inset-0 backdrop-blur-sm"
                    aria-hidden="true"
                />

                <motion.div
                    className="relative w-full m-auto"
                    style={{
                        padding:
                            '0 env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
                    }}
                    initial={{ y: '100%' }}
                    animate={{ y: 13 }}
                    exit={{ y: '100%' }}
                    transition={{
                        type: 'spring',
                        damping: 28,
                        stiffness: 300
                    }}
                >
                    <Dialog.Panel
                        className={`flex flex-col p-3 m-auto rounded-sm bg-dark outline outline-1 outline-tertiary ${customClasses}`}
                    >
                        <div className="flex items-center justify-between flex-none p-4 shadow">
                            {title && (
                                <Dialog.Title className="text-2xl font-semibold text-white">
                                    {title}
                                </Dialog.Title>
                            )}
                            <button className="ml-auto" onClick={onClose}>
                                <TbX color="white" />
                            </button>
                            {/* <IconButton
                                Icon={
                                    <>x</>
                                    // <CloseIcon
                                    //     height={32}
                                    //     width={32}
                                    //     fill="currentColor"
                                    // />
                                }
                                onClick={onClose}
                            /> */}
                        </div>
                        <div className="flex-1 w-full p-6 overflow-auto">
                            {children}
                        </div>
                    </Dialog.Panel>
                </motion.div>
            </Dialog>
        </AnimatePresence>
    )
}

export default Modal
