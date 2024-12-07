import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface PopupProps {
    message: string
    subMessage: string
    isOpen: boolean
    onClose: () => void
}

export function Popup({ message, subMessage, isOpen, onClose }: PopupProps) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose()
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl max-w-xl w-full">
                {/* Header */}
                <div className="bg-[#f5e6c3] px-4 py-3 rounded-t-3xl flex justify-between items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-300" />
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-12 text-center">
                    <p className="text-2xl font-semibold mb-2">{message}</p>
                    <p className="text-2xl font-semibold">{subMessage}</p>
                </div>
            </div>
        </div>
    )
}
